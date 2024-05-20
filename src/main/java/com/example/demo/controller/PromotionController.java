package com.example.demo.controller;

import com.example.demo.dto.EmailRequest;
import com.example.demo.dto.EmailResponse;
import com.example.demo.model.Promotion;
import com.example.demo.service.PromotionService;
import jakarta.validation.Valid;
import org.apache.catalina.authenticator.SavedRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.transform.OutputKeys;
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
    public Promotion addPromotion(@RequestBody Promotion promotion) throws Exception{
      try{
            if(promotion.getStart_time().isAfter(promotion.getEnd_time()) ||
                    promotion.getStart_time().isEqual(promotion.getEnd_time())){
                 throw new Exception("START TIME SHOULD MUST BE BEFORE THE END TIME");
            }
            else {
                Promotion savedPromotion = promotionService.addPromotion(promotion);
                String emailRequest = promotionService.generate_email(savedPromotion);
                System.out.println(emailRequest);
                return savedPromotion;
            }
        }
        catch(Exception ex){
            throw new Exception(ex);
        }
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
}
