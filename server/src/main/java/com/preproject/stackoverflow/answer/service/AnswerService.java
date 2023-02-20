package com.preproject.stackoverflow.answer.service;


import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.repository.AnswerRepository;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;
    private final MemberRepository memberRepository;
    private final MemberService memberService;

    private final QuestionService questionService;
    //private final CusmtomBeanUtils<Answer> beanUtils;

    // Answer 등록
    public Answer createAnswer(Answer answer){
        Member member = memberService.findmember(answer.getMemberId());
        Question question = questionService.findVerifiedQuestion(answer.getQuestionId());
        answer.setCreatedAt(LocalDateTime.now());
        answer.addMember(member);
        answer.addQuestion(question);
        // question.plusAnswerCount(); 경민님 question에서 달릴거. 답변 갯수

        return answerRepository.save(answer);
    }

    // Answer 수정

    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getAnswerContents())
                .ifPresent(content -> findAnswer.setAnswerContents(content));

        return answerRepository.save(findAnswer);
    }

    // Answer 조회
    public Answer findAnswer(long answerId){

        return findVerifiedAnswer(anserId);
    }

    // Answer 목록 조회
    public Page<Answer> findAnswers(int page, int size){
        Page<Answer> answerPage =
                answerRepository.findAll(PageRequest.of(page -1, size, Sort.by("scores").ascending())); // 보트 순
        // newset순 if 문으로 추가하기 나중에
        return answerPage;
    }


    // Answer 삭제
    public void deleteAnswer(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        Quesiton quesiton = questionService.findVerifiedQuestion(findAnswer.getQuestion().getQuestionId());
        // quesiton.minusAnswerCount(); // 경민님 파트 상의

        answerRepository.delete(findAnswer);
    }


    // vote Up
    public Answer voteUp(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setScores(findAnswer.getScores() +1);
        Answer updateAnswer = answerRepository.save(findAnswer);

        return updateAnswer;
    }

    // vote Down
    public Answer voteDown(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setScores(findAnswer.getScores() - 1);
        Answer updateAnswer = answerRepository.save(findAnswer);

        return updateAnswer;
    }


    @Transactional(readOnly = true)
    public Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        // 답변이 DB에 존재하는지 확인
        // orElseThrow -> 가져온 값이 null이면 제외

        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicExcoption(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }



}
