package com.tiago.backend.service;

import com.tiago.backend.model.entity.User;
import com.tiago.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findUser(String email) {
        return userRepository.findByEmail(email);
    }

}
