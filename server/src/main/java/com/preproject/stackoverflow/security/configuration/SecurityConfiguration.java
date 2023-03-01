package com.preproject.stackoverflow.security.configuration;

import com.preproject.stackoverflow.member.repository.MemberRepository;
import com.preproject.stackoverflow.member.service.MemberService;
import com.preproject.stackoverflow.security.filter.JwtAuthenticationFilter;
import com.preproject.stackoverflow.security.filter.JwtVerificationFilter;
import com.preproject.stackoverflow.security.handler.*;
import com.preproject.stackoverflow.security.jwt.JwtTokenizer;
import com.preproject.stackoverflow.security.redis.service.RedisService;
import com.preproject.stackoverflow.security.userdetails.MemberDetailsService;
import com.preproject.stackoverflow.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;

@Configuration
@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
public class SecurityConfiguration {
//    @Value("${spring.security.oauth2.client.registration.google.clientId}")
//    private String clientId;
//
//    @Value("${spring.security.oauth2.client.registration.google.clientSecret")
//    private String clientSecret;

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberDetailsService memberDetailsService;
    private final MemberService memberService;
    private final RedisService redisService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/*/members").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/*/members/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/members/**").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/*/questions").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/*/questions/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/questions/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/*/questions/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/*/answers").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/*/answers/**").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/*/answers/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/*/answers/**").hasRole("USER")
                        .anyRequest().permitAll()
                )
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils, memberService))
                );

        return http.build();
    }
//http://localhost:8080/oauth2/authorization/google

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(Collections.singletonList("*"));
        configuration.addAllowedOrigin("http://localhost:3000");
        configuration.addAllowedOrigin("http://localhost:8080");
        configuration.addAllowedOrigin("https://manymanyflow.netlify.app");
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        configuration.addAllowedHeader("*");
        configuration.addExposedHeader("*");

        configuration.validateAllowCredentials();
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer, redisService);
            jwtAuthenticationFilter.setFilterProcessesUrl("/api/auth/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils, memberDetailsService, redisService);

            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);


        }
    }

}
