package com.preproject.stackoverflow.domain.question.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder

public class QuestionFindResponseDto {

    private Long questionId;
    private Long memberId ;
    private String username;
    private String questionTitle;
    private LocalDateTime questionCreatedAt;
    private LocalDateTime questionModifiedAt;
    private Long questionVoteCount;
    private Long questionViewCount;
    private String questionProblemBody;
    private String questionTryOrExpectingBody;
    private List<QuestionFindAnswerDto> answers;
}
