package com.groupeisi.keycloakspringboot3.exceptions;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDate;

@ControllerAdvice
public class HandleException  extends RuntimeException{

    @ExceptionHandler({EntityNotFoundException.class})
    public @ResponseBody ApiError handleEntityNotFoundException(EntityNotFoundException e) {
       ApiError apiException;
        apiException = ApiError.builder()
                 .httpStatus(HttpStatus.NOT_FOUND)
                 .message("No school was found with provided ID")
                 .timestamp(LocalDate.now())
                 .build();
        return apiException;
    }

    @ExceptionHandler({EntityExistsException.class})
    public @ResponseBody ApiError handleEntityExistsException(EntityExistsException e) {
        ApiError apiException;
        apiException = ApiError.builder()
                .httpStatus(HttpStatus.CONFLICT)
                .message("This school is already exist")
                .timestamp(LocalDate.now())
                .build();
        return apiException;
    }
}
