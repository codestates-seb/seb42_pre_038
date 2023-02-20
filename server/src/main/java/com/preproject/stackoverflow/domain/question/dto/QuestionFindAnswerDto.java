package com.preproject.stackoverflow.domain.question.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder

public class QuestionFindAnswerDto {
    private Long answerId;
    private LocalDateTime answerCreatedAt;
    private String answerContent;
    private Long memberId;
    private String username;
}
