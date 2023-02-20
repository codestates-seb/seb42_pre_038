package com.preproject.stackoverflow.domain.question.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder

public class QuestionPostResponseDto {

    private Long questionId;
    private String questionTitle;
    private String questionProblemBody;
    private String questionTryOrExpectingBody;
}
