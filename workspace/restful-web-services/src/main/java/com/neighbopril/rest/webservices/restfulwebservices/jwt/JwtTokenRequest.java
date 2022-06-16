package com.neighbopril.rest.webservices.restfulwebservices.jwt;

import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;

public class JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -8730500684405829557L;

    @Getter
    @Setter
    private String username;

    @Getter
    @Setter
    private String password;

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
