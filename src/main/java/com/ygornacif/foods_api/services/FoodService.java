package com.ygornacif.foods_api.services;

import org.springframework.web.multipart.MultipartFile;

public interface FoodService {

    String uploadFile(MultipartFile file);
}
