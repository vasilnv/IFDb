package com.example.IFdb.model.entity;

import com.example.IFdb.model.enums.RatingType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.xml.stream.events.Comment;
import java.util.List;


@Entity(name = "restaurants")
@Setter
@Getter
@NoArgsConstructor
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private byte[] buffer;

    @NotNull
    @Column
    private String name;

    @NotNull
    @Column
    private String address;


    @NotNull
    @Column
    private String description;

    @Column
    @Enumerated(EnumType.STRING)
    private RatingType rating;


    @Column
    private String[] comments;

    @NotNull
    @Column
    private String[] foods;

}
