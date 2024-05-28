package com.example.demo.model;

import com.example.demo.enums.Gender;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.FieldDefaults;

@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class Demographics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    int age;
    Gender gender;
    String region;
    String Occupation;
}
