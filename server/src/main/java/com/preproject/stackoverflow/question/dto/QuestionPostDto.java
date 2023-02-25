package com.preproject.stackoverflow.question.dto;

import lombok.Getter;
import javax.validation.constraints.Positive;
import java.util.List;

import javax.validation.constraints.NotBlank;

@Getter


public class QuestionPostDto {


    // 수동 매핑 해야할듯 ㅠ
    //private long memberId;

    @NotBlank(message = "질문 제목을 적어주세요")
    private String title;

    @NotBlank(message = "질문 내용을 적어주세요")
    private String content;
}
