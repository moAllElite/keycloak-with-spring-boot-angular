package com.groupeisi.keycloakspringboot3.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
    @GetMapping("/auth")
    public Authentication authentication(Authentication auth){
        return  auth;
    }
}
