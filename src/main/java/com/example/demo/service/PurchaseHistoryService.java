package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.model.PurchaseHistory;
import com.example.demo.repository.ProductRepo;
import com.example.demo.repository.PurchaseHistoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PurchaseHistoryService {

    @Autowired
    PurchaseHistoryRepo purchaseHistoryRepo;

    @Autowired
    ProductRepo productRepo;

    public void purchase(int productId) throws Exception {

        Optional<Product> optionalProduct = productRepo.findById(productId);
        if(optionalProduct.isEmpty()){
            throw new Exception("product not found");
        }
        Product product = optionalProduct.get();

        PurchaseHistory purchaseHistory = PurchaseHistory.builder()
                .product(product)
                .build();
        purchaseHistoryRepo.save(purchaseHistory);
    }
}
