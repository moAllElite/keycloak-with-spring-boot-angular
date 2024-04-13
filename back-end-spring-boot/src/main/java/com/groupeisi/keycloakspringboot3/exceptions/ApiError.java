package com.groupeisi.keycloakspringboot3.exceptions;

import lombok.*;
import org.springframework.http.HttpStatus;

import java.time.LocalDate;
@AllArgsConstructor
@Builder
@Getter
@Setter
public class ApiError {
    HttpStatus httpStatus;
     String message;
     LocalDate timestamp;
}
