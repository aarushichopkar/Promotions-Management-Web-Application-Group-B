package com.example.demo.controller;
import com.example.demo.model.Demographics;
import com.example.demo.service.DemographicsService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/demographics")
public class DemographicsController {

    private final DemographicsService demographicsService;

    @Autowired
    public DemographicsController(DemographicsService demographicsService){
        this.demographicsService = demographicsService;
    }

    @PostMapping("/add")
    public String addDemographics(@RequestParam("audience_id") long audience_id,
                                        @RequestBody Demographics demographics) throws Exception{
        demographicsService.addDemographics(audience_id, demographics);
        return "demographics added";
    }
}
