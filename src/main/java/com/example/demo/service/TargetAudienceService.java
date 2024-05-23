package com.example.demo.service;

import com.example.demo.model.*;
import com.example.demo.model.AudienceBehaviour;
import com.example.demo.repository.TargetAudienceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TargetAudienceService {

    @Autowired
    TargetAudienceRepo targetAudienceRepo;

    public TargetAudience addAudience(TargetAudience targetAudience) {

        targetAudience.setUserBehaviour(new AudienceBehaviour());
        return targetAudienceRepo.save(targetAudience);
    }
}
