package com.example.demo.service;
import com.example.demo.enums.TargetAudienceCriteria;
import com.example.demo.model.Demographics;
import com.example.demo.model.TargetAudience;
import com.example.demo.repository.DemographicsRepo;
import com.example.demo.repository.TargetAudienceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DemographicsService {

    private final DemographicsRepo demographicsRepo;

    @Autowired
    public DemographicsService(DemographicsRepo demographicsRepo){
        this.demographicsRepo = demographicsRepo;
    }

    @Autowired
    TargetAudienceRepo targetAudienceRepo;

    public void addDemographics(long audience_id, Demographics demographics) throws Exception{

        Optional<TargetAudience> optionalTargetAudience = targetAudienceRepo.findById(audience_id);
        if(optionalTargetAudience.isEmpty()){
            throw new Exception("no audience user found");
        }
        TargetAudience foundTargetAudience = optionalTargetAudience.get();

        if(foundTargetAudience.getDemographics() != null){
            throw new Exception("demographics is already set");
        }
        foundTargetAudience.setDemographics(demographics);

        // set criteria
        TargetAudienceCriteria criteria;
        int age = demographics.getAge();
        if(age>10 && age<=19){
            criteria = TargetAudienceCriteria.TEENS;
        } else if (age>19 && age<=39) {
            criteria = TargetAudienceCriteria.ADULTS;
        } else if (age>39 && age<=59) {
            criteria = TargetAudienceCriteria.MIDDLE_AGED;
        }else {
            criteria = TargetAudienceCriteria.SENIORS;
        }
        foundTargetAudience.setTargetAudienceCriteria(criteria);

        // save targetAudience
        targetAudienceRepo.save(foundTargetAudience);
    }
}
