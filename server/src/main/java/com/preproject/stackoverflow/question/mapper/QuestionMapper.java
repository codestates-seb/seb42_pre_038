package com.preproject.stackoverflow.question.mapper;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.question.dto.QuestionPostDto;
import com.preproject.stackoverflow.question.dto.QuestionPatchDto;
import com.preproject.stackoverflow.question.dto.QuestionResponseDto;
import com.preproject.stackoverflow.question.entity.Question;
import com.preproject.stackoverflow.question.entity.QuestionVote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.time.LocalDateTime;
import java.util.List;

@Mapper(componentModel = "spring")

public interface QuestionMapper {

    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "name", target = "member.name")
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);

    @Mapping(source = "memberId", target = "member.memberId")
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "member.name", target = "name")
    QuestionResponseDto questionToQuestionResponseDto(Question question);

    List<QuestionResponseDto> questionsToQuestionResponseDto(List<Question> questions);
}
