package com.example.demo.quartz.Job;

import com.example.demo.model.Promotion;
import com.example.demo.repository.PromotionRepo;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.hibernate.annotations.Comment;
import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mail.MailProperties;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.quartz.QuartzJobBean;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;

@Component
public class EmailJob extends QuartzJobBean {
    @Autowired
    private PromotionRepo promotionRepo;


    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private MailProperties mailProperties;
    @Override
    protected  void executeInternal(JobExecutionContext jobExecutionContext){
             JobDataMap jobDataMap = jobExecutionContext.getMergedJobDataMap();

             String subject = jobDataMap.getString("subject");
             String body = jobDataMap.getString("body");
             String recipientEmail = jobDataMap.getString("email");
             long promotion_id = jobDataMap.getLong("promotion_id");

             CheckValidity(promotion_id);
             sendMail(mailProperties.getUsername(), recipientEmail, subject, body);


    }

    private void sendMail(String fromEmail, String toEmail, String subject, String body){
     try{
         MimeMessage message = mailSender.createMimeMessage();
         MimeMessageHelper messageHelper = new MimeMessageHelper(message, StandardCharsets.UTF_8.toString());
         messageHelper.setSubject(subject);
         messageHelper.setText(body,true);
         messageHelper.setFrom(fromEmail);
         messageHelper.setTo(toEmail);
         mailSender.send(message);
         System.out.println("MAIL_SENT");
     } catch (MessagingException ex){
         System.out.println(ex);
        }
    }

    private void CheckValidity(long id){
        Promotion pro = promotionRepo.findById(id).get();
        System.out.println("Modified Active State through Scheduler");
        if(pro.isActive()){
            pro.setActive(false);
        }
        else {
            pro.setActive(true);
        }
        promotionRepo.save(pro);
    }

}
