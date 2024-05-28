package com.example.demo.repository;

import com.example.demo.enums.TargetAudienceCriteria;
import com.example.demo.model.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PromotionRepo extends JpaRepository<Promotion, Long> {

    List<Promotion> findByTargetAudienceCriteria(TargetAudienceCriteria criteria);
}
