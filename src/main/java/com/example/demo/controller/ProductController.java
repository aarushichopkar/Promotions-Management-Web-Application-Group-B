package com.example.demo.controller;

import com.example.demo.model.Promotion;
import com.example.demo.model.Visit;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/product")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(@RequestParam("promotion_id") long promotion_id,
                                              @RequestBody Product product) throws Exception {
        Product savedProduct = productService.addProduct(promotion_id, product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    @PostMapping("/audienceVisit")
    public ResponseEntity<?> addvisit(@RequestParam("product_id") int product_id,
                                      @RequestBody Visit v) throws Exception{
        Product SavedProduct = productService.addvisit(product_id,v);
        return new ResponseEntity<>(SavedProduct, HttpStatus.CREATED);
    }

    @GetMapping("/getProducts")
    public List<Product> get_Products(){
        return (List<Product>) productService.get_Products();
    }

}
