package com.preproject.stackoverflow.answer.mapper;


import com.preproject.stackoverflow.answer.dto.AnswerPatchDto;
import com.preproject.stackoverflow.answer.dto.AnswerPostDto;
import com.preproject.stackoverflow.answer.dto.AnswerResponseDto;
import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.time.LocalDateTime;
import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "name", target = "member.name")
    @Mapping(source = "questionId", target = "question.questionId")
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);

    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "name", target = "member.name")
    @Mapping(source = "questionId", target = "question.questionId")
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "question.questionId", target = "questionId")
    @Mapping(source = "member.name", target = "name")
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);

    List<AnswerResponseDto> answersToAnswerResponseDto(List<Answer> answers);

}
