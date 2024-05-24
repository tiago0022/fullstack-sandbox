package com.tiago.backend.service;

import com.tiago.backend.model.entity.User;
import com.tiago.backend.repository.UserRepository;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findUser(String email) throws BadRequestException {
        return Optional.ofNullable(userRepository.findByEmail(email))
                .orElseThrow(() -> new BadRequestException("User not found"));
    }

}
