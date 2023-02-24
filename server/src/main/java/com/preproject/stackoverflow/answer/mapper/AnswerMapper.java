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

    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto){
        Answer answer = new Answer();
        Member member = new Member();
        Question question = new Question();

        member.setMemberId(answerPostDto.getMemberId());
        question.setQuestionId(answerPostDto.getQuestionId());

        answer.setMember(member);
        answer.setQuestion(question);
        answer.setAnswerContent(answerPostDto.getAnswerContent());
        System.out.println(answer.getQuestion());

        return answer;

    }

    default Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto){
        Answer answer = new Answer();
        //Question question = new Question();

        answer.setAnswerContent(answerPatchDto.getAnswerContent());

        return answer;
    }

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer){

        Long questionId = answer.getQuestion().getQuestionId();

        Long answerId = answer.getAnswerId();
        LocalDateTime createdAt = answer.getCreatedAt();
        LocalDateTime modifiedAt = answer.getModifiedAt();
        int voteCount = answer.getVoteCount();
        String answerContent = answer.getAnswerContent();
        String name = null;
        AnswerResponseDto answerResponseDto = new AnswerResponseDto(answerId, (String)answerContent, createdAt, modifiedAt, voteCount, (Long)questionId, (String)name);

        return answerResponseDto;

    }

    List<AnswerResponseDto> answersToAnswerResponseDto(List<Answer> answers);


}
