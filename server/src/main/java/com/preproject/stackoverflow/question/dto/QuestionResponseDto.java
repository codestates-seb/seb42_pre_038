package com.preproject.stackoverflow.question.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder // 여러 패턴의 생성자 생성
@Getter
@Setter
public class QuestionResponseDto {

    private Long questionId;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private int voteCount; // vote
    private Long answerId;
    private Long memberId;
    private String name;
    private String viewCount;
    private int answersCount;


}
