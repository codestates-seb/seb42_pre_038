package com.preproject.stackoverflow.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

public enum ExceptionCode {
    MEMBER_EXISTS(HttpStatus.CONFLICT, "이미 존재하는 아이디입니다."),
    MEMBER_NOT_FOUND(HttpStatus.NOT_FOUND, "회원 정보가 없습니다."),
    ANSWER_NOT_FOUND(HttpStatus.NOT_FOUND, "답변이 존재 하지 않습니다."),
    VOTE_EXISTS(HttpStatus.CONFLICT, "이미 투표한 회원입니다.");

    @Getter
    private HttpStatus httpStatus;

    @Getter
    private String message;

    ExceptionCode(HttpStatus httpStatus, String message) {
        this.httpStatus = httpStatus;
        this.message = message;
    }
}
