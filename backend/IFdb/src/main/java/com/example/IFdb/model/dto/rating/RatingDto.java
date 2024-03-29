package com.example.IFdb.model.dto.rating;

import com.example.IFdb.model.enums.RatingType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
public class RatingDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    private RatingType ratingType;

    private Integer rating;

    @Column
    private Integer user_id;

    @Column
    private Integer restaurant_id;
}
