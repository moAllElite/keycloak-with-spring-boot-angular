package com.groupeisi.keycloakspringboot3.service.interfaces;

import com.groupeisi.keycloakspringboot3.dto.SchoolDTO;
import  java.util.List;
public interface ISchoolService {
    SchoolDTO findById(Long id);
    void save(SchoolDTO schoolDTO);
    List<SchoolDTO> getAllSchools();
    SchoolDTO update(Long id, SchoolDTO schoolDTO);
    void deleteSchoolById(Long id);
}
