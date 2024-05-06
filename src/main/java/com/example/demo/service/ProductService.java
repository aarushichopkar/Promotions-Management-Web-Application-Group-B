package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    private final ProductRepo productRepo;

    @Autowired
    public ProductService(ProductRepo productRepo){
        this.productRepo = productRepo;
    }
    public Product addProduct(Product product) {
        return productRepo.save(product);
    }
}
