package com.tiago.backend.controller;

import com.tiago.backend.model.dto.UserDto;
import com.tiago.backend.model.mapping.UserMapper;
import com.tiago.backend.service.UserService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @GetMapping
    public UserDto getUser(@RequestParam(name = "email") String email) throws BadRequestException {
        return userMapper.toDto(userService.findUser(email));
    }

}
