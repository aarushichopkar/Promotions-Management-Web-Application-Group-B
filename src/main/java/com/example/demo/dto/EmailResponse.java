package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailResponse {
    private boolean success;

    private String jobId;

    private String jobGroup;

    private String message;

    public EmailResponse(boolean success, String message){
        this.success = success;
        this.message = message;
    }

    public EmailResponse(boolean success, String jobId, String jobGroup, String message){
        this.success = success;
        this.message = message;
        this.jobId = jobId;
        this.jobGroup = jobGroup;
    }
}
