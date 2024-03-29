package com.example.IFdb.service;

import com.example.IFdb.model.dto.comment.AddCommentDto;
import com.example.IFdb.model.dto.rating.RatingDto;
import com.example.IFdb.model.dto.user.BlockUserDto;
import com.example.IFdb.model.dto.user.ChangeCredentialsDto;
import com.example.IFdb.model.dto.user.DeleteUserDto;
import com.example.IFdb.model.dto.user.LoginUserDto;
import com.example.IFdb.model.dto.user.RegisterUserDto;
import com.example.IFdb.model.entity.Comment;
import com.example.IFdb.model.entity.Rating;
import com.example.IFdb.model.entity.User;

import java.util.List;

public interface UserService {
    User registerUser(RegisterUserDto user);

    User loginUser(LoginUserDto user);

    User changeCredentials(ChangeCredentialsDto changeCredentialsDto);

    void blockUsers(BlockUserDto blockUserDto);

    void deleteUser(Integer id);

    void addComment(AddCommentDto addCommentDto);

    Rating addRating(RatingDto ratingDto);

    List<Rating> getUserRating(Integer userId, Integer restaurantId);

    void deleteComment(Integer commentId);

    List<User> getAllUsers();
}
