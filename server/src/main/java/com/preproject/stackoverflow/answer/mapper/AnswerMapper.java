package com.preproject.stackoverflow.answer.mapper;


import com.preproject.stackoverflow.answer.dto.AnswerPatchDto;
import com.preproject.stackoverflow.answer.dto.AnswerPostDto;
import com.preproject.stackoverflow.answer.dto.AnswerResponseDto;
import com.preproject.stackoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    AnswerResponseDto answerToAnswerResponseDto(Answer answer);

    List<AnswerResponseDto> answersToAnswerResponseDto(List<Answer> answers);


}
