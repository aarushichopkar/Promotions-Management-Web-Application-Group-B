package com.example.demo.controller;

import com.example.demo.model.UserBehaviour;
import com.example.demo.service.UserBehaviourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user_behaviour")
public class UserBehaviourController {

    private final UserBehaviourService userBehaviourService;

    @Autowired
    public UserBehaviourController(UserBehaviourService userBehaviourService){
        this.userBehaviourService = userBehaviourService;
    }

    @PostMapping("/add")
    public UserBehaviour addUserBehaviour(@RequestBody UserBehaviour userBehaviour){
        return userBehaviourService.addUserBehaviour(userBehaviour);
    }
}
