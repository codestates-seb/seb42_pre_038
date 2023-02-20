package com.preproject.stackoverflow.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter

public class QuestionPatchDto {

    private long questionId;

    @NotBlank
    private String questionContent;
}
