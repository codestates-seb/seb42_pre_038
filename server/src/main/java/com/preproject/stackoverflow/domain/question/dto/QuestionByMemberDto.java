package com.preproject.stackoverflow.domain.question.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder

public class QuestionByMemberDto {

    private Long questionId;
    private String questionTitle;
    private LocalDateTime questionCreatedAt;
//    private LocalDateTime questionModifiedAt;
}
