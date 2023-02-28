package com.preproject.stackoverflow.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.preproject.stackoverflow.dto.LoginDto;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.member.repository.MemberRepository;
import com.preproject.stackoverflow.security.jwt.JwtTokenizer;
import com.preproject.stackoverflow.security.redis.service.RedisService;
import com.preproject.stackoverflow.security.utils.CookieUtil;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;
    private final RedisService redisService;

    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        ObjectMapper objectMapper = new ObjectMapper();
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());

        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws ServletException, IOException {
        Member member = (Member) authResult.getPrincipal();
        String accessToken = jwtTokenizer.delegateAccessToken(member);
        String refreshToken = jwtTokenizer.delegateRefreshToken(member);

        redisService.setValues(member.getEmail(), refreshToken);
        System.out.println(member.getName());
//        Cookie refresh = CookieUtil.createCookie("Refresh", refreshToken);
//        response.addCookie(refresh);
        CookieUtil.createCookie(response, refreshToken);
        String memberId = member.getMemberId().toString();
        response.setHeader("Authorization", "Bearer " + accessToken);
        response.setHeader("memberId", memberId.toString());
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);
    }

}
