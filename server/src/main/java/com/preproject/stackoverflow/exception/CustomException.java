package com.preproject.stackoverflow.exception;

public class CustomException extends RuntimeException{

    private ExceptionCode exceptionCode;

    public CustomException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
