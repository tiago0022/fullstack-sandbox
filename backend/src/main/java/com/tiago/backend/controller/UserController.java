package com.tiago.backend.controller;

import com.tiago.backend.model.dto.UserDto;
import com.tiago.backend.model.entity.User;
import com.tiago.backend.model.mapping.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserMapper userMapper;

    @GetMapping
    public UserDto getUser(@RequestParam(name = "email") String email) {

        System.out.println("Param received on getUser: " + email);

        User mockUser = new User();
        mockUser.setId(UUID.randomUUID());
        mockUser.setEmail("email@test.mock");
        mockUser.setName("John Doe");

        return userMapper.toDto(mockUser);
    }

}
