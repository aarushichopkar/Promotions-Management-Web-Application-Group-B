package com.example.demo.service;

import com.example.demo.model.TargetAudience;
import com.example.demo.repository.TargetAudienceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TargetAudienceService {

    @Autowired
    TargetAudienceRepo targetAudienceRepo;

    public TargetAudience addAudience(TargetAudience targetAudience) {
        return targetAudienceRepo.save(targetAudience);
    }
}
