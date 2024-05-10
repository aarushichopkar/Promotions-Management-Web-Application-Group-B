package com.example.demo.service;

import com.example.demo.model.UserBehaviour;
import com.example.demo.repository.UserBehaviourRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserBehaviourService {

    private final UserBehaviourRepo userBehaviourRepo;

    @Autowired
    public UserBehaviourService(UserBehaviourRepo userBehaviourRepo){
        this.userBehaviourRepo = userBehaviourRepo;
    }
    public UserBehaviour addUserBehaviour(UserBehaviour userBehaviour) {
        return userBehaviourRepo.save(userBehaviour);
    }
}
