package com.example.demo.model;

import com.example.demo.enums.PaymentMode;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class UserBehaviour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

//    LocalDate lastLoginDate;
    int purchaseFrequency;
    PaymentMode paymentMode;
}
