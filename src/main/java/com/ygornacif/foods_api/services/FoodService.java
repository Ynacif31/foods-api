package com.ygornacif.foods_api.services;

import com.ygornacif.foods_api.io.FoodRequest;
import com.ygornacif.foods_api.io.FoodResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FoodService {

    String uploadFile(MultipartFile file);

    FoodResponse addFood(FoodRequest request, MultipartFile file);

    List<FoodResponse> getAllFoods();
}
