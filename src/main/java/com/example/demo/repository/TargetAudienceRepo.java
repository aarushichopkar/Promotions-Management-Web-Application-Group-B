package com.example.demo.repository;

import com.example.demo.model.TargetAudience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TargetAudienceRepo extends JpaRepository<TargetAudience, Long> {
}
