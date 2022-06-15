package com.neighbopril.rest.webservices.restfulwebservices.jwt;

import java.io.IOException;
import java.io.Serializable;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.EqualsAndHashCode;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
@EqualsAndHashCode
public class JwtUnAuthorizedResponseAuthenticationEntryPoint implements AuthenticationEntryPoint,
    Serializable {

    private static final long serialVersionUID = -1241116299814464146L;

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
        AuthenticationException authException) throws IOException, ServletException {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED,
            "You would need to provide the Jwt Token to Access This resource");
    }
}
