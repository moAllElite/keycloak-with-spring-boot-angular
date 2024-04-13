package com.groupeisi.keycloakspringboot3.repository;

import com.groupeisi.keycloakspringboot3.entities.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SchoolRepository extends JpaRepository<School,Long> {
   Optional<School> findByEmail(String email);
}
