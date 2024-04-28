package Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    Demographics Demographics;

    List<PurchaseHistory> purchaseHistory;

    UserBehaviour userBehaviour;

}
