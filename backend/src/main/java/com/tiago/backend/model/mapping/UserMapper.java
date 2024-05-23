package com.tiago.backend.model.mapping;

import com.tiago.backend.model.dto.UserDto;
import com.tiago.backend.model.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toDto(User user);
}
