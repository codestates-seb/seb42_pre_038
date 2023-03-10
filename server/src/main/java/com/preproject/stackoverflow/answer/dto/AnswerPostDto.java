package com.preproject.stackoverflow.answer.dto;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
public class AnswerPostDto {

    private Long memberId;

    private String name;

    private Long questionId;

    @NotBlank // 답변내용은 비어있으면 안된다.
    private String answerContent;
}
