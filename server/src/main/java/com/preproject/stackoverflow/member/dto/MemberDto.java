package com.preproject.stackoverflow.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class MemberDto {

    @Getter
    public static class Post {

        private String email;

        private String password;

        private String name;

    }

    @Getter
    public static class Patch {

        private String password;

        private String name;

    }

    @Getter
    @AllArgsConstructor
    public static class Response {

        private String email;

        private String password;

        private String name;

    }
}
