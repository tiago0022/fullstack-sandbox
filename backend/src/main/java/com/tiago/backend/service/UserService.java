package com.tiago.backend.service;

import com.tiago.backend.model.entity.User;

public interface UserService {
    User findUser(String email);
}
