package com.preproject.stackoverflow.answer.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
public class AnswerResponseDto {

    private Long answerId;

    private String answerContent;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private int voteCount; // vote

    private Long questionId;

    private String name;



}
