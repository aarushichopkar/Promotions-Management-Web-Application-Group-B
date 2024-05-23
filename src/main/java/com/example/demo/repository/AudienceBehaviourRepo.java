package com.example.demo.repository;

import com.example.demo.model.AudienceBehaviour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AudienceBehaviourRepo extends JpaRepository<AudienceBehaviour, Integer> {
}
