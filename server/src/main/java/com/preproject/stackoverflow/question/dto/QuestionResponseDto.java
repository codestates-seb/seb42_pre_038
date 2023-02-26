package com.preproject.stackoverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
public class QuestionResponseDto {

    private Long questionId;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private int voteCount; // vote
    private Long memberId;
    private int viewCount;
    private int answersCount;


}
