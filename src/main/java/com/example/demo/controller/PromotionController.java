package com.example.demo.controller;

import com.example.demo.enums.TargetAudienceCriteria;
import com.example.demo.model.Promotion;
import com.example.demo.service.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/promotion")
public class PromotionController {

    private final PromotionService promotionService;

    @Autowired
    public PromotionController(PromotionService promotionService){
        this.promotionService = promotionService;
    }

    @PostMapping("/add")
    public Promotion addPromotion(@RequestBody Promotion promotion){
        return promotionService.addPromotion(promotion);
    }

    @GetMapping("/find-all")
    public List<Promotion> find_all_promotion(){
            return (List<Promotion>) promotionService.find_all_promotion();
    }

    @PutMapping("/update")
    public Promotion update(@RequestParam("id") long promotion_id,
                            @RequestBody Promotion promotion){
       return promotionService.updatePromotion(promotion_id,promotion);
    }

    // find promotions targeted for particular audience
    // taking audience id as input
    @GetMapping("/find-by-criteria")
    public List<Promotion> findByCriteria(@RequestParam("id") long id) throws Exception{
        return promotionService.findByCriteria(id);
    }
}
