package com.groupeisi.keycloakspringboot3;

import com.groupeisi.keycloakspringboot3.entities.School;
import com.groupeisi.keycloakspringboot3.repository.SchoolRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class KeycloakSpringBoot3Application {

    public static void main(String[] args) {
        SpringApplication.run(KeycloakSpringBoot3Application.class, args);
    }
    @Bean
    CommandLineRunner commandLineRunner(SchoolRepository schoolRepository) {
        return args-> Stream.of("Libasse Niang","Savoir plus","ma awa déme","mamadou sagna","abdoulaye badji")
                .forEach(
                    name->    schoolRepository.save( new School(null,name,"contact@"+String.join("\t",name.toLowerCase())
                            +".com"))
                );
    }
}
