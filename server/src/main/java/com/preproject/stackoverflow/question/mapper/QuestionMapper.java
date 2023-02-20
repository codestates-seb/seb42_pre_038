package com.preproject.stackoverflow.question.mapper;

import com.preproject.stackoverflow.domain.question.dto.QuestionPostDto;

import com.preproject.stackoverflow.question.dto.QuestionPatchDto;
import com.preproject.stackoverflow.question.dto.QuestionResponseDto;
import com.preproject.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface QuestionMapper {

    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
    QuestionResponseDto questionToQuestionResponseDto(Question question);
}
