package com.neighbopril.rest.webservices.restfulwebservices.jwt.resources;

import java.io.Serializable;
import lombok.Getter;

public class JwtTokenResponse implements Serializable {

    private static final long serialVersionUID = 6106591714491090808L;

    private final String token;

    public JwtTokenResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return this.token;
    }
}
