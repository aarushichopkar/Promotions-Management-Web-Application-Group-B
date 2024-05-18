package com.example.demo.model;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
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

//    List<PurchaseHistory> purchaseHistory;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userBehaviour_id")
    UserBehaviour userBehaviour;
}



