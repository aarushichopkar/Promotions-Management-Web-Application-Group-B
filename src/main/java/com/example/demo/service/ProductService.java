package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.model.Promotion;
import com.example.demo.repository.ProductRepo;
import com.example.demo.repository.PromotionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {
//    private final ProductRepo productRepo;
    private final PromotionRepo promotionRepo;

    @Autowired
    public ProductService(PromotionRepo promotionRepo){
        this.promotionRepo = promotionRepo;
    }


    public Product addProduct(long promotion_id, Product product) throws Exception {

        // first check if promotion exists or not
        Optional<Promotion> optionalPromotion = promotionRepo.findById(promotion_id);
        if(optionalPromotion.isEmpty()){
            throw new Exception("invalid promotion id");
        }

        Promotion foundPromotion = optionalPromotion.get();

        //add product to the list of products in promotion
        foundPromotion.getApplicableProducts().add(product);

        //set foundPromotion as promotion in product entity
        product.setPromotion(foundPromotion);

        // since we have cascade relation between product and promotion
        // only save promotion
        Promotion savedPromotion = promotionRepo.save(foundPromotion);

        // return recently added product
        int size = savedPromotion.getApplicableProducts().size();
        return savedPromotion.getApplicableProducts().get(size-1);
    }
}
