package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    String description;
    double price;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Visit> visits = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "promotion_id")
    @JsonIgnore
    Promotion promotion;

    long proId;
}
