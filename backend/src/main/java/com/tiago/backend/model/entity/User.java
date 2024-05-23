package com.tiago.backend.model.entity;

import lombok.Data;

import java.util.UUID;

@Data
public class User {
    private UUID id;
    private String email;
    private String name;
}
