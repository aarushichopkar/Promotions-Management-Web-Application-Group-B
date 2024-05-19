package com.example.demo.service;

import com.example.demo.enums.TargetAudienceCriteria;
import com.example.demo.model.Promotion;
import com.example.demo.model.TargetAudience;
import com.example.demo.repository.PromotionRepo;
import com.example.demo.repository.TargetAudienceRepo;
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

    @Autowired
    TargetAudienceRepo targetAudienceRepo;

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

    public List<Promotion> findByCriteria(long id) throws Exception{

        Optional<TargetAudience> aud = targetAudienceRepo.findById(id);
        if(aud.isEmpty()){
            throw new Exception("no user found");
        }

        // get criteria of the user audience
        TargetAudienceCriteria criteria = aud.get().getTargetAudienceCriteria();

        // find list of all promotions for this criteria
        return promotionRepo.findByTargetAudienceCriteria(criteria);
    }
}
