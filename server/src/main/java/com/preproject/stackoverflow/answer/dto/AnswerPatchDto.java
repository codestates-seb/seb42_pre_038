package com.preproject.stackoverflow.answer.dto;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class AnswerPatchDto {

    private long answerId;

    @NotBlank // 답변 내용의 공백은 불가하다.
    private String answerContent;
}
