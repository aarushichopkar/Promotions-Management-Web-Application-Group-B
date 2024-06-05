package com.example.demo.model;

import com.example.demo.enums.TargetAudienceCriteria;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
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

    long managerId;

    long Owner_id;

    @NotNull
    String promotionType;

    @CreationTimestamp
    LocalDate creation_time;

    @NotNull
    private LocalDateTime start_time;

    @NotNull
    private LocalDateTime end_time;

    @NotNull
    private ZoneId timeZone;

    double discount_rate;

    @OneToMany(mappedBy = "promotion", cascade = CascadeType.ALL)
    List<Product> applicableProducts = new ArrayList<>();

    TargetAudienceCriteria targetAudienceCriteria;

    boolean isActive;
}
