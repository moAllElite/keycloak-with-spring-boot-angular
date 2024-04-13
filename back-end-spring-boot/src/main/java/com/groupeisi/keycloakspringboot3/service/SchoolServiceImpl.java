package com.groupeisi.keycloakspringboot3.service;

import com.groupeisi.keycloakspringboot3.dto.SchoolDTO;
import com.groupeisi.keycloakspringboot3.entities.School;
import com.groupeisi.keycloakspringboot3.mapper.ISchoolMapper;
import com.groupeisi.keycloakspringboot3.repository.SchoolRepository;
import com.groupeisi.keycloakspringboot3.service.interfaces.ISchoolService;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;



@CacheConfig(cacheNames = "schools")
@Service
@AllArgsConstructor
public class SchoolServiceImpl implements ISchoolService {
    private  SchoolRepository schoolRepository;
    private final ISchoolMapper mapper;


    @Cacheable(key = "#name")
    @Transactional(readOnly = true)
    @Override
    public SchoolDTO findById(Long id) {
        return mapper.toDTO(
                schoolRepository.findById(id)
                        .orElseThrow(
                ()-> new EntityNotFoundException("No school was found"))
        );
    }

    @Transactional
    @Override
    public void save(SchoolDTO schoolDTO) {
        School school = mapper.toEntity(schoolDTO);
        School   schoolExistsByEmail= schoolRepository.findByEmail(school.getEmail())
                .orElse(null);
        if (schoolExistsByEmail != null) {
            throw new EntityExistsException(String.format("School with email %s  already exists",school.getEmail() ));
        }
        mapper.toDTO(schoolRepository.save(school));
    }

    @Cacheable(key = "#name")
    @Transactional(readOnly = true)
    @Override
    public List<SchoolDTO> getAllSchools() {
        return schoolRepository.findAll()
                .stream().map(mapper::toDTO)
                .toList();
    }
    @CachePut( key = "#name")
    @Override
    public   SchoolDTO update(Long id, SchoolDTO schoolDTO){
        if(!schoolRepository.existsById(id)){
           throw new EntityNotFoundException("No school was found with provided ID:"+id);
        }

        School school = mapper.toEntity(schoolDTO);
        school.setId(id);
        return  mapper.toDTO(
                schoolRepository.save(school)
        );
    }

    @Override
    public void deleteSchoolById(Long id) {
        boolean existsById = schoolRepository.existsById(id);
        if(!existsById){
            throw new EntityNotFoundException("No school was found with provided ID:"+id);
        }
        schoolRepository.deleteById(id);
    }
}
