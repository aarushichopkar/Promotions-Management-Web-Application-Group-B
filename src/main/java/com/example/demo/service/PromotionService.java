package com.example.demo.service;

import com.example.demo.model.Promotion;
import com.example.demo.repository.PromotionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PromotionService {

    private final PromotionRepo promotionRepo;

    @Autowired
    public PromotionService(PromotionRepo promotionRepo){
        this.promotionRepo = promotionRepo;
    }
    public Promotion addPromotion(Promotion promotion) {
        promotion.setActive(true);
        return promotionRepo.save(promotion);
    }

    public List<Promotion> find_all_promotion() {
        return (List<Promotion>) promotionRepo.findAll();
    }

    public Promotion updatePromotion(long promotionId, Promotion promotion) {
        Optional<Promotion> p = promotionRepo.findById(promotionId);
        if(p.isEmpty()){
            return null;
        }
        Promotion pro = p.get();
        pro.setPromotionType(promotion.getPromotionType());
        pro.setDuration(promotion.getDuration());
        pro.setManager_id(promotion.getManager_id());
        pro.setOwner_id(promotion.getOwner_id());
        pro.setDiscountRate(promotion.getDiscountRate());
        pro.setActive(promotion.isActive());
        pro.setApplicableProducts(promotion.getApplicableProducts());
        promotionRepo.save(pro);
       return pro;
    }
}
