package com.example.demo.controller;

import com.example.demo.model.TargetAudience;
import com.example.demo.service.TargetAudienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/audience")
public class TargetAudienceController {

    @Autowired
    TargetAudienceService targetAudienceService;

    @PostMapping("/add")
    public TargetAudience addAudience(@RequestBody TargetAudience targetAudience){
        return targetAudienceService.addAudience(targetAudience);
    }
}
