package Model;
import Enums.TargetAudienceCriteria;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
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

    LocalDate duration;

    double discountRate;

    List<Product> appilcableProducts;

    TargetAudienceCriteria tragetAudienceCriteria;

    boolean isActive;

}
