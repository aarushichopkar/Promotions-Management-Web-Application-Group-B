package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo){
        this.userRepo = userRepo;
    }
    public User addUser(User user) {
        return userRepo.save(user);
    }
}
