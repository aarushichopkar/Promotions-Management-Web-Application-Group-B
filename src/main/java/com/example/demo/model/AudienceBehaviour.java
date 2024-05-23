package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@FieldDefaults(level = AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
public class AudienceBehaviour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    //    LocalDate lastLoginDate;
    LocalDate lastPurchaseDate;
    int purchaseFrequency;
//    PaymentMode paymentMode;
}
