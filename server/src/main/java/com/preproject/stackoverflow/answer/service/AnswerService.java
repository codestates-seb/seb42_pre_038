package com.preproject.stackoverflow.answer.service;


import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.entity.AnswerVote;
import com.preproject.stackoverflow.answer.repository.AnswerRepository;
import com.preproject.stackoverflow.answer.repository.AnswerVoteRepository;
import com.preproject.stackoverflow.audit.BaseTime;
import com.preproject.stackoverflow.exception.CustomException;
import com.preproject.stackoverflow.exception.ExceptionCode;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.member.repository.MemberRepository;
import com.preproject.stackoverflow.member.service.MemberService;
import com.preproject.stackoverflow.question.entity.Question;
import com.preproject.stackoverflow.question.repository.QuestionRepository;
import com.preproject.stackoverflow.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class AnswerService{
    private final AnswerRepository answerRepository;
    private final AnswerVoteRepository answerVoteRepository;
    private final MemberService memberService;

    private final QuestionService questionService;


    // Answer 등록
    public Answer createAnswer(Answer answer){
        memberService.findVerifiedMember(answer.getMember().getMemberId());
        memberService.verifyLoginMember(answer.getMember().getMemberId());
        Question question = questionService.findQuestion(answer.getQuestion().getQuestionId());

        question.setAnswersCount(question.getAnswersCount() + 1);

        answer.addQuestion(question);
        System.out.println(answer.getMember().getName());

        return answerRepository.save(answer);
    }

    // Answer 수정

    public Answer updateAnswer(Answer answer){
        memberService.findVerifiedMember(answer.getMember().getMemberId());
        memberService.verifyLoginMember(answer.getMember().getMemberId());
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());


        findAnswer.setAnswerContent(answer.getAnswerContent());

        return answerRepository.save(findAnswer);
    }

    // Answer 조회
    public Answer findAnswer(long answerId){

        return findVerifiedAnswer(answerId);
    }

    // Answer 목록 조회  // vote 순인지 newest 순인지 알것
    public Page<Answer> findAnswers(int page, int size, int sort, Long questionId){

        Question question = questionService.findVerifiedQuestion(questionId);
        if(sort == 0) { // Newest 정렬
            Page<Answer> answerPage =
                    answerRepository.findAllByQuestion(question ,  PageRequest.of(page - 1, size, Sort.by("answerId").descending())); // newest 순
            return answerPage;

        }else{ // voteCount 순 정렬

            Page<Answer> answerPage =
                    answerRepository.findAllByQuestion(question, PageRequest.of(page - 1, size, Sort.by("voteCount").descending())); // vote 순
            return answerPage;
        }

    }


    // Answer 삭제
    public void deleteAnswer(long answerId){

        Answer findAnswer = findVerifiedAnswer(answerId);
        memberService.findVerifiedMember(findAnswer.getMember().getMemberId());
        memberService.verifyLoginMember(findAnswer.getMember().getMemberId());
        // Question에 달린 Answer가 삭제되므로, answerCount도 삭제 된다.
        Question question = questionService.findQuestion(findAnswer.getQuestion().getQuestionId());
        question.setAnswersCount(question.getAnswersCount() - 1);

        answerRepository.delete(findAnswer);
    }


    // vote Up
    public Answer voteUp(long answerId, long memberId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        memberService.findVerifiedMember(memberId);
        memberService.verifyLoginMember(memberId);
        if (answerVoteRepository.findByMember_MemberId(memberId).isEmpty() == true){
            // 보트 추가
            AnswerVote answerVote = new AnswerVote();

            // 연관관계 입력
            answerVote.setAnswer(findAnswer(answerId));
            answerVote.setMember(memberService.getMember(memberId));

            // AnswerVote 데이터 DB에 저장
            answerVoteRepository.save(answerVote);

            // Answer 테이블에 voteCount(답변에 달린 Answer 수) 업데이트 및 저장
            findAnswer.setVoteCount(findAnswer.getVoteCount() +1);
            Answer updateAnswer = answerRepository.save(findAnswer);

            return updateAnswer;

        }else {
            System.out.println("hi");
            throw new CustomException(ExceptionCode.VOTE_EXISTS);
        }

        /*System.out.println("----------------");
        // 중복 보트 검사 ( if null이 아니라면 중복이기 때문에 Exception 발생)
        Optional.ofNullable(answerVoteRepository.findByMember_MemberId(memberId))
                .ifPresent(Exception-> {throw new CustomException(ExceptionCode.VOTE_EXISTS);});

*/
    }

    // vote Down
    public Answer voteDown(long answerId, long memberId){
        Answer findAnswer = findVerifiedAnswer(answerId);
        memberService.findVerifiedMember(memberId);
        memberService.verifyLoginMember(memberId);
        if (answerVoteRepository.findByMember_MemberId(memberId).isEmpty() == true){

            // 보트 추가
            AnswerVote answerVote = new AnswerVote();
            answerVote.setAnswer(findAnswer(answerId));
            answerVote.setMember(memberService.getMember(memberId));

            answerVoteRepository.save(answerVote);

            // Answer 엔티티에 voteCount 수정

            findAnswer.setVoteCount(findAnswer.getVoteCount() - 1);

            // Answer 엔티티에  변견사항 저장
            Answer updateAnswer = answerRepository.save(findAnswer);

            return updateAnswer;

        }else {
            System.out.println("hi");
            throw new CustomException(ExceptionCode.VOTE_EXISTS);


        }

    }

    public List<Answer> getMembers(Long memberId){
        memberService.findVerifiedMember(memberId);
        memberService.verifyLoginMember(memberId);

        List<Answer> members = answerRepository.findTop5ByMember_MemberIdOrderByCreatedAtDesc(memberId);

        return members;
    }


    @Transactional(readOnly = true)
    public Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        // 답변이 DB에 존재하는지 확인
        // orElseThrow -> 가져온 값이 null이면 제외

        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new CustomException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }

}
