package com.example.demo.service;
import com.example.demo.model.Demographics;
import com.example.demo.repository.DemographicsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DemographicsService {

    private final DemographicsRepo demographicsRepo;

    @Autowired
    public DemographicsService(DemographicsRepo demographicsRepo){
        this.demographicsRepo = demographicsRepo;
    }
    public Demographics addDemographics(Demographics demographics) {
        return demographicsRepo.save(demographics);
    }
}
