package com.groupeisi.keycloakspringboot3.dto;

import lombok.Builder;

@Builder
public record SchoolDTO(
        Long id,
        String name,
        String email
) {
}
