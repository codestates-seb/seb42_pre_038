package com.preproject.stackoverflow.answer.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder // 여러 패턴의 생성자 생성
@Getter
@Setter
public class AnswerResponseDto {

    private Long answerId;

    private String answerContent;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private int score; // vote

    private Long questionId;

    private Long memberId;

    private String name;

    //private String profile;

}
