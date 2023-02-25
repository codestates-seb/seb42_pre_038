package com.preproject.stackoverflow.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter

public class QuestionPatchDto {

    @NotBlank(message = "질문 제목을 적어주세요")
    private String title;

    @NotBlank(message = "질문 내용을 적어주세요")
    private String content;
}
