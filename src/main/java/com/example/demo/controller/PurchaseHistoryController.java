package com.example.demo.controller;

import com.example.demo.service.PurchaseHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/purchase_history")
public class PurchaseHistoryController {

    @Autowired
    PurchaseHistoryService purchaseHistoryService;

    @PostMapping("/purchase")
    public void purchase(@RequestParam("product_id") int product_id) throws Exception {
        purchaseHistoryService.purchase(product_id);
    }
}
