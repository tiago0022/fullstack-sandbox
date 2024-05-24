package com.tiago.backend.service;

import com.tiago.backend.model.entity.User;
import org.apache.coyote.BadRequestException;

public interface UserService {
    User findUser(String email) throws BadRequestException;
}
