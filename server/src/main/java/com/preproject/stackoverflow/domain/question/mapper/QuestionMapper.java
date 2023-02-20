package com.preproject.stackoverflow.domain.question.mapper;

import com.preproject.stackoverflow.domain.answer.entity.Answer;
import com.preproject.stackoverflow.domain.member.entity.Member;
import com.preproject.stackoverflow.domain.question.dto.*;
import com.preproject.stackoverflow.domain.question.entity.Question;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Component
@RequiredArgsConstructor

public class QuestionMapper {
    public Question postQuestionDtoToQuestion(QuestionPostDto questionPostDto, List<Tag> tagList, Member member) {

        if (questionPostDto == null || tagList == null || member == null) {
            return null;
        }

        Question question = new Question();
        question.setQuestionTitle(questionPostDto.getQuestionTitle());
        question.setQuestionProblemBody(questionPostDto.getQuestionProblemBody());
        question.setQuestionTryOrExpectingBody(questionPostDto.getQuestionTryOrExpectingBody());
        question.setMember(member);
        return question;
    }

    public QuestionFindResponseDto questionInfoToQuestionFindResponseDto(Question question, Member member, List<Tag> tagList, List<QuestionFindAnswerDto> answers) {

        if (question == null || member == null || tagList == null || answers == null) {
            return null;
        }

        return QuestionFindResponseDto.builder()
                .questionId(question.getQuestionId())
                .memberId(member.getMemberId())
                .username(member.getUsername())
                .image(member.getImage())
                .questionTitle(question.getQuestionTitle())
                .questionCreatedAt(question.getCreatedAt())
                .questionModifiedAt(question.getModifiedAt())
                .questionVoteCount(question.getQuestionVoteCount())
                .questionViewCount(question.getQuestionViewCount())
                .questionProblemBody(question.getQuestionProblemBody())
                .questionTryOrExpectingBody(question.getQuestionTryOrExpectingBody())
                .answers(answers)
                .build();
    }

    public List<QuestionFindAnswerDto> answersToQuestionFindAnswerDto(List<Answer> answers) {

        if (answers == null) {
            return null;
        }

        return answers.stream()
                .map(answer -> {
                    return QuestionFindAnswerDto.builder()
                            .answerId(answer.getAnswerId())
                            .answerCreatedAt(answer.getCreatedAt())
                            .answerContent(answer.getAnswerContent())
                            .answerVoteCount(answer.getAnswerVoteCount())
                            .memberId(answer.getMember().getMemberId())
                            .username(answer.getMember().getUsername())
                            .build();
                })
                .collect(Collectors.toList());
    }

    public QuestionVoteResponseDto questionToQuestionVoteResponseDto(Question question) {

        return QuestionVoteResponseDto.builder()
                .questionId(question.getQuestionId())
                .questionVoteCount(question.getQuestionVoteCount())
                .build();
    }
//
//    public QuestionHomeResponseDto questionToQuestionHomeResponseDto(QuestionTag questionTag) {
//
//    }

    public List<QuestionHomeDto> questionInfoToQuestionHomeDto(List<Question> questions) {

        if (questions == null) {
            return null;
        }

        return questions.stream()
                .map(question -> {
                    return QuestionHomeDto.builder()
                            .questionId(question.getQuestionId())
                            .memberId(question.getMember().getMemberId())
                            .username(question.getMember().getUsername())
                            .image(question.getMember().getImage())
                            .questionTitle(question.getQuestionTitle())
                            .questionCreatedAt(question.getCreatedAt())
//                            .questionModifiedAt(question.getModifiedAt())
                            .questionVoteCount(question.getQuestionVoteCount())
                            .questionViewCount(question.getQuestionViewCount())
                            .questionAnswerCount(question.getAnswers().size())
                            .questionProblemBody(question.getQuestionProblemBody())
                            .questionTryOrExpectingBody(question.getQuestionTryOrExpectingBody())
                            .build();
                })
                .collect(Collectors.toList());
    }
}
