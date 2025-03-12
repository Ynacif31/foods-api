package com.ygornacif.foods_api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "foods")
public class FoodEntity {

    private String id;
    private String name;
    private String description;
    private String imageUrl;
    private double price;
    private String category;
}
