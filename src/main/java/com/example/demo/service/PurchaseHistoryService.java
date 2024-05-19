package com.example.demo.service;

import com.example.demo.enums.PaymentMode;
import com.example.demo.model.Product;
import com.example.demo.model.PurchaseHistory;
import com.example.demo.model.TargetAudience;
import com.example.demo.model.UserBehaviour;
import com.example.demo.repository.ProductRepo;
import com.example.demo.repository.PurchaseHistoryRepo;
import com.example.demo.repository.TargetAudienceRepo;
import com.example.demo.repository.UserBehaviourRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PurchaseHistoryService {

    @Autowired
    PurchaseHistoryRepo purchaseHistoryRepo;

    @Autowired
    ProductRepo productRepo;
    @Autowired
    TargetAudienceRepo targetAudienceRepo;
    @Autowired
    UserBehaviourRepo userBehaviourRepo;

    public void purchase(int productId, long audience_id, PaymentMode mode) throws Exception {

        Optional<Product> optionalProduct = productRepo.findById(productId);
        Optional<TargetAudience> optionalTargetAudience = targetAudienceRepo.findById(audience_id);
        if(optionalProduct.isEmpty() || optionalTargetAudience.isEmpty()){
            throw new Exception("invalid input parameters");
        }
        Product product = optionalProduct.get();
        TargetAudience targetAudience = optionalTargetAudience.get();

        PurchaseHistory purchaseHistory = PurchaseHistory.builder()
                .product(product)
                .mode(mode)
                .build();

        // add to the purchase history list of target audience
        targetAudience.getPurchaseHistory().add(purchaseHistory);

        purchaseHistoryRepo.save(purchaseHistory);

        // if user behaviour is null;
        if(targetAudience.getUserBehaviour() == null){
            UserBehaviour userBehaviour = UserBehaviour.builder()
                    .lastPurchaseDate(purchaseHistory.getPurchaseDate())
                    .paymentMode(purchaseHistory.getMode())
                    .build();
            targetAudience.setUserBehaviour(userBehaviour);
        }else{
            // update user behaviour
            UserBehaviour userBehaviour = targetAudience.getUserBehaviour();

            userBehaviour.setLastPurchaseDate(purchaseHistory.getPurchaseDate());
            userBehaviour.setPaymentMode(purchaseHistory.getMode());
//            targetAudience.setUserBehaviour(userBehaviour);
        }
        targetAudienceRepo.save(targetAudience);
    }
}
