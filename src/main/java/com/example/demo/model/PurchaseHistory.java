package com.example.demo.model;

import com.example.demo.enums.PaymentMode;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
public class PurchaseHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @CreationTimestamp
    LocalDate purchaseDate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id")
    Product product;
    PaymentMode mode;

}



