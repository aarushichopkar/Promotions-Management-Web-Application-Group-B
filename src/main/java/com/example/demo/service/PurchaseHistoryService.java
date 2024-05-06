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
    ProductRepo productRepo;

    public void purchase(int productId) throws Exception {
        Product product;
        try{
            product = productRepo.findById(productId).get();
        } catch(Exception e){
            throw new Exception("product not found");
        }
        PurchaseHistory purchaseHistory = PurchaseHistory.builder()
                .product(product)
                .build();
        purchaseHistoryRepo.save(purchaseHistory);
    }
}
