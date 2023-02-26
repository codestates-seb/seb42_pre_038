package com.preproject.stackoverflow.question.mapper;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.question.dto.QuestionPostDto;
import com.preproject.stackoverflow.question.dto.QuestionPatchDto;
import com.preproject.stackoverflow.question.dto.QuestionResponseDto;
import com.preproject.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.List;

@Mapper(componentModel = "spring")

public interface QuestionMapper {

    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto){

        Member member = new Member();
        Question question = new Question();

        member.setMemberId(questionPostDto.getMemberId());

        question.setMember(member);
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());

        return question;
    };
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
   default QuestionResponseDto questionToQuestionResponseDto(Question question){


       Long questionId = question.getQuestionId();
       Long memberId = question.getMember().getMemberId();
       String title = question.getTitle();
       String content = question.getContent();
       LocalDateTime createdAt = question.getCreatedAt();
       LocalDateTime modifiedAt = question.getModifiedAt();
       int voteCount = question.getVoteCount();
       int viewCount = question.getViewCount();
       int answerCount = question.getAnswersCount();

       QuestionResponseDto questionResponseDto = new QuestionResponseDto(questionId, title, content, createdAt, modifiedAt, voteCount, memberId,viewCount, answerCount );

       return questionResponseDto;
   };

    List<QuestionResponseDto> questionsToQuestionResponseDto(List<Question> questions);
}
