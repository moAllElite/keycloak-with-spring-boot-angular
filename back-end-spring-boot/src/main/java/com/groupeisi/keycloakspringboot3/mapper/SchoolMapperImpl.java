package com.groupeisi.keycloakspringboot3.mapper;

import com.groupeisi.keycloakspringboot3.dto.SchoolDTO;
import com.groupeisi.keycloakspringboot3.entities.School;
import org.springframework.stereotype.Component;

@Component
public class SchoolMapperImpl implements ISchoolMapper {
    @Override
    public School toEntity(SchoolDTO schoolDTO) {
        return School.builder()
                .id(schoolDTO.id())
                .name(schoolDTO.name())
                .email(schoolDTO.email())
                .build();
    }

    @Override
    public SchoolDTO toDTO(School school) {
        return  SchoolDTO.builder()
                .id(school.getId())
                .name(school.getName())
                .email(school.getEmail())
                .build();
    }
}
