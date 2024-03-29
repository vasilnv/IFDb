package com.example.IFdb.service;

import com.example.IFdb.model.dto.comment.AddCommentDto;
import com.example.IFdb.model.dto.restaurant.CreateRestaurantDto;
import com.example.IFdb.model.entity.Comment;
import com.example.IFdb.model.dto.rating.RatingDto;
import com.example.IFdb.model.entity.Restaurant;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

public interface RestaurantService {

    Restaurant createRestaurantPage(Integer userId, MultipartFile multipartFile, CreateRestaurantDto createRestaurantDto) throws IOException, SQLException;

    List<Restaurant> getAllRestaurants();

    Restaurant addRestaurantRating(RatingDto ratingDto);

    Restaurant getRestaurantById(Integer id);

    Restaurant editRestaurantPage(Integer userId,MultipartFile multipartFile,CreateRestaurantDto createRestaurantDto);
}
