package com.groupeisi.keycloakspringboot3.controllers;

import com.groupeisi.keycloakspringboot3.dto.SchoolDTO;
import com.groupeisi.keycloakspringboot3.service.interfaces.ISchoolService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/schools")
@AllArgsConstructor
@RestController
public class SchoolRestController {
    private ISchoolService schoolService;
    @GetMapping("/find-by")
    public ResponseEntity<SchoolDTO> findById(@RequestParam Long id){
        return ResponseEntity.ok( schoolService.findById(id));
    }
    @GetMapping
    public ResponseEntity<List<SchoolDTO>> getAllSchools(){
        return ResponseEntity.ok(
                schoolService.getAllSchools()
        );
    }
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public void save(@RequestBody SchoolDTO schoolDTO){
      schoolService.save(schoolDTO);
    }


    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<String> update(@PathVariable Long id,@RequestBody SchoolDTO schoolDTO){
        schoolService.update(id, schoolDTO);
        return ResponseEntity.noContent().build();
    }
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id){
        schoolService.deleteSchoolById(id);
    }
}
