//package com.example.demo.controller;
//
//import com.example.demo.model.AudienceBehaviour;
//import com.example.demo.service.UserBehaviourService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/user_behaviour")
//public class UserBehaviourController {
//
//    private final UserBehaviourService userBehaviourService;
//
//    @Autowired
//    public UserBehaviourController(UserBehaviourService userBehaviourService){
//        this.userBehaviourService = userBehaviourService;
//    }
//
//    @PostMapping("/add")
//    public String addUserBehaviour(@RequestParam("audience_id") long audience_id,
//                                          @RequestBody AudienceBehaviour userBehaviour) throws  Exception{
//        userBehaviourService.addUserBehaviour(audience_id, userBehaviour);
//        return "User behaviour added";
//    }
//}
