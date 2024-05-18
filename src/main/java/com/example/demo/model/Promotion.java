package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity

public class Promotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    String promotionType;

    @CreationTimestamp
    LocalDate creationDate;

    double discountRate;

    @OneToMany(mappedBy = "promotion", cascade = CascadeType.ALL)
    List<Product> applicableProducts = new ArrayList<>();

//    TargetAudienceCriteria tragetAudienceCriteria;

    boolean isActive;
}
