//package com.example.demo.service;
//
//import com.example.demo.model.TargetAudience;
//import com.example.demo.model.UserBehaviour;
//import com.example.demo.repository.TargetAudienceRepo;
//import com.example.demo.repository.UserBehaviourRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class UserBehaviourService {
//
//    private final UserBehaviourRepo userBehaviourRepo;
//
//    @Autowired
//    public UserBehaviourService(UserBehaviourRepo userBehaviourRepo){
//        this.userBehaviourRepo = userBehaviourRepo;
//    }
//
//    @Autowired
//    TargetAudienceRepo targetAudienceRepo;
//
//    public void addUserBehaviour(long audience_id, UserBehaviour userBehaviour) throws Exception{
//
//        Optional<TargetAudience> optionalTargetAudience = targetAudienceRepo.findById(audience_id);
//        if(optionalTargetAudience.isEmpty()){
//            throw new Exception("no audience user found");
//        }
//        TargetAudience foundTargetAudience = optionalTargetAudience.get();
//        foundTargetAudience.setUserBehaviour(userBehaviour);
//        targetAudienceRepo.save(foundTargetAudience);
//
//    }
//}
