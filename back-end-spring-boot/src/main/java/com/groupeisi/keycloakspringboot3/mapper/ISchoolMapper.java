package com.groupeisi.keycloakspringboot3.mapper;

import com.groupeisi.keycloakspringboot3.dto.SchoolDTO;
import com.groupeisi.keycloakspringboot3.entities.School;

public interface ISchoolMapper {
    School toEntity(SchoolDTO schoolDTO);
    SchoolDTO toDTO(School school);
}
