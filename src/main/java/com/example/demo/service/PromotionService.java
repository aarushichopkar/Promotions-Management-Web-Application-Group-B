package com.example.demo.service;

import com.example.demo.model.Promotion;
import com.example.demo.repository.PromotionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PromotionService {

    private final PromotionRepo promotionRepo;

    @Autowired
    public PromotionService(PromotionRepo promotionRepo){
        this.promotionRepo = promotionRepo;
    }
    public Promotion addPromotion(Promotion promotion) {
        return promotionRepo.save(promotion);
    }
}
