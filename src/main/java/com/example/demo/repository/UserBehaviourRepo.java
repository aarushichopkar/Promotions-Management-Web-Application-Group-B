package com.example.demo.repository;

import com.example.demo.model.UserBehaviour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserBehaviourRepo extends JpaRepository<UserBehaviour, Integer> {
}
