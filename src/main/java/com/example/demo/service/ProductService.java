package com.example.demo.service;

import com.example.demo.model.Visit;
import com.example.demo.model.Product;
import com.example.demo.model.Promotion;
import com.example.demo.repository.ProductRepo;
import com.example.demo.repository.PromotionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepo productRepo;

    @Autowired
    PromotionRepo promotionRepo;


    public Product addProduct(long promotion_id, Product product) throws Exception {

        // first check if promotion exists or not
        Optional<Promotion> optionalPromotion = promotionRepo.findById(promotion_id);
        if(optionalPromotion.isEmpty()){
            throw new Exception("invalid promotion id");
        }

        Promotion foundPromotion = optionalPromotion.get();

        product.setProId(promotion_id);

        //add product to the list of products in promotion
        foundPromotion.getApplicableProducts().add(product);

        //set foundPromotion as promotion in product entity
        product.setPromotion(foundPromotion);

        // save both product and promotion
        Product savedProduct = productRepo.save(product);
        Promotion savedPromotion = promotionRepo.save(foundPromotion);

        return savedProduct;
        // return recently added product
//        int size = savedPromotion.getApplicableProducts().size();
//        return savedPromotion.getApplicableProducts().get(size-1);
    }

    public Product addvisit(int product_id, Visit v) throws Exception {
        Optional<Product> optionalProduct = productRepo.findById(product_id);
        if(optionalProduct.isEmpty()){
            throw new Exception("invalid product id");
        }
        Product product = optionalProduct.get();

        v.setProduct(product);

        product.getVisits().add(v);

        Product savedProduct = productRepo.save(product);

        return savedProduct;
    }

    public List<Product> get_Products() {
        return (java.util.List<com.example.demo.model.Product>) productRepo.findAll();
    }

    public void deleteProduct(int id) throws Exception{
        Optional<Product> optionalProduct = productRepo.findById(id);
        if(optionalProduct.isEmpty()){
            throw new Exception("product not found");
        }

        // deleting from promotion products list
        List<Product> products = optionalProduct.get().getPromotion().getApplicableProducts();
        Iterator<Product> iterator = products.iterator();
        while (iterator.hasNext()) {
            Product product = iterator.next();
            if (product.getId() == id) {
                iterator.remove();
                break;
            }
        }

        productRepo.deleteById(id);
    }
}
