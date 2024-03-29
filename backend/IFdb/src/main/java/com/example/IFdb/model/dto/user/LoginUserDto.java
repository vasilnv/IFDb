package com.example.IFdb.model.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LoginUserDto {


    @NotNull
    @Column
    private String username;

    @NotNull
    @Column
    private String password;

}


