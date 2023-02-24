package com.preproject.stackoverflow.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Pattern;

public class MemberDto {

    @Getter
    public static class Post {
        @Pattern(regexp = "[0-9a-zA-Z]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$", message = "유효한 이메일 주소가 아닙니다.")
        private String email;

        @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*\\W).{8,20}$", message = "비밀번호는 영문과 특수문자, 숫자를 포함하여 8자 이상이고 20자 이하여야 합니다.")
        private String password;

        @Pattern(regexp = "^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,}$", message = "이름은 2자 이상 16자 이하, 영어 또는 숫자 또는 한글로 구성해야 합니다.")
        private String name;

    }

    @Getter
    public static class Patch {

        @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*\\W).{8,20}$", message = "비밀번호는 영문과 특수문자, 숫자를 포함하여 8자 이상이고 20자 이하여야 합니다.")
        private String password;

        @Pattern(regexp = "^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,}$", message = "이름은 2자 이상 16자 이하, 영어 또는 숫자 또는 한글로 구성해야 합니다.")
        private String name;

    }

    @Getter
    @AllArgsConstructor
    public static class Response {

        private String memberId;

        private String email;

        private String name;

    }
}
