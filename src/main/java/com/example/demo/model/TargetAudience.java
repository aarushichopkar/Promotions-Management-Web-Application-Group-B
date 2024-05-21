package com.example.demo.model;
import com.example.demo.enums.TargetAudienceCriteria;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.ArrayList;
import java.util.List;

@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class TargetAudience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "demographics_id")
    Demographics Demographics;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "audience_id")
    List<PurchaseHistory> purchaseHistory = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userBehaviour_id")
    AudienceBehaviour userBehaviour;

    TargetAudienceCriteria targetAudienceCriteria;
}



