package com.example.demo.repository;

import com.example.demo.model.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PromotionRepo extends JpaRepository<Promotion, Long> {
}
