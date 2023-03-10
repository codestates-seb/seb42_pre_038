package com.preproject.stackoverflow.question.service;


import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.entity.AnswerVote;
import com.preproject.stackoverflow.question.entity.Question;
import com.preproject.stackoverflow.question.entity.QuestionVote;
import com.preproject.stackoverflow.question.repository.QuestionRepository;
import com.preproject.stackoverflow.question.repository.QuestionVoteRepository;
import com.preproject.stackoverflow.exception.CustomException;
import com.preproject.stackoverflow.exception.ExceptionCode;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.member.repository.MemberRepository;
import com.preproject.stackoverflow.member.service.MemberService;
import com.preproject.stackoverflow.answer.repository.AnswerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final QuestionVoteRepository questionVoteRepository;
    private final AnswerRepository answerRepository;
    private final MemberService memberService;

    public Question createQuestion(Question question) {
        memberService.findVerifiedMember(question.getMember().getMemberId());
        memberService.verifyLoginMember(question.getMember().getMemberId());

        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question) {
        Member verifiedMember = memberService.findVerifiedMember(question.getMember().getMemberId());
        System.out.println(question.getMember().getMemberId());
        memberService.verifyLoginMember(question.getMember().getMemberId());
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());
        findQuestion.setMember(verifiedMember);
        Optional.ofNullable(question.getTitle()).ifPresent(findQuestion::setTitle);
        Optional.ofNullable(question.getContent()).ifPresent(findQuestion::setContent);

        return questionRepository.save(findQuestion);
    }

    public Question findQuestion(long questionId) {
        updateView(questionId);
        return findVerifiedQuestion(questionId);
    }

    // Question ?????? ??????  // vote ????????? newest ????????? ??????
    public Page<Question> findQuestions(int page, int size, int sort) {
        // Newest ??????
        if (sort == 0) {
            Page<Question> questionPage = questionRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
            return questionPage;

            // Active ??? (LastModified , ????????? ?????? ?????? ???)
        } else if (sort == 1) {
            Page<Question> questionPage = questionRepository.findAll(PageRequest.of(page, size, Sort.by("modifiedAt").descending()));
            return questionPage;

            // Unanswered ???
        } else if (sort == 2) {
            Page<Question> questionPage = questionRepository.findAll(PageRequest.of(page, size, Sort.by("answersCount").ascending()));
            return questionPage;

            // voteCount ???
        } else {
            Page<Question> questionPage = questionRepository.findAll(PageRequest.of(page, size, Sort.by("voteCount").descending()));
            return questionPage;
        }
    }

    // Question ??????
    public void deleteQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        memberService.findVerifiedMember(findQuestion.getMember().getMemberId());
        memberService.verifyLoginMember(findQuestion.getMember().getMemberId());
        // ?????? ????????? ????????? -> ??????
        if (answerRepository.countByQuestion(findQuestion) == 0) {
            questionRepository.deleteById(questionId);

            // ?????? ????????? ????????? -> ?????? ??????
        } else {
            throw new CustomException(ExceptionCode.QUESTION_EXIST_ANSWER);
        }
    }

    public Page<Question> search(int page, int size, String keyword) {
        Page<Question> questions = questionRepository.findByTitleContaining(keyword, PageRequest.of(page - 1, size));

        return questions;
    }

    // vote Up
    public Question voteUp(long questionId, long memberId) {
        Question findQuestion = findVerifiedQuestion(questionId);

        memberService.findVerifiedMember(memberId);
        memberService.verifyLoginMember(memberId);
        if (questionVoteRepository.findByMember_MemberIdAndQuestion_QuestionId(memberId, questionId).isEmpty() == true) {

            // ?????? ??????
            QuestionVote questionVote = new QuestionVote();

            // ???????????? ??????
            questionVote.setQuestion(findQuestion(questionId));
            questionVote.setMember(memberService.getMember(memberId));

            // QuestionVote ????????? DB??? ??????
            questionVoteRepository.save(questionVote);

            // Question ???????????? voteCount(????????? ?????? Answer ???) ???????????? ??? ??????
            findQuestion.setVoteCount(findQuestion.getVoteCount() + 1);
            Question updateQuestion = questionRepository.save(findQuestion);

            return updateQuestion;
        } else {
            throw new CustomException(ExceptionCode.VOTE_EXISTS);
        }
    }

    // vote Down
    public Question voteDown(long questionId, long memberId) {
        Question findQuestion = findVerifiedQuestion(questionId);

        memberService.findVerifiedMember(memberId);
        memberService.verifyLoginMember(memberId);
        if (questionVoteRepository.findByMember_MemberIdAndQuestion_QuestionId(memberId, questionId).isEmpty() == true) {

            // ?????? ??????
            QuestionVote questionVote = new QuestionVote();

            // ???????????? ??????
            questionVote.setQuestion(findQuestion(questionId));
            questionVote.setMember(memberService.getMember(memberId));

            // QuestionVote ????????? DB??? ??????
            questionVoteRepository.save(questionVote);

            // Question ???????????? voteCount(????????? ?????? Answer ???) ???????????? ??? ??????
            findQuestion.setVoteCount(findQuestion.getVoteCount() - 1);
            Question updateAnswer = questionRepository.save(findQuestion);

            return updateAnswer;

        } else {
            throw new CustomException(ExceptionCode.VOTE_EXISTS);
        }
    }

    public void updateView(Long questionId) {
        Question question = findVerifiedQuestion(questionId);
        question.setViewCount(question.getViewCount() + 1);
    }

    public List<Question> getMembers(Long memberId) {
        memberService.findVerifiedMember(memberId);
        memberService.verifyLoginMember(memberId);
        List<Question> members = questionRepository.findTop5ByMember_MemberIdOrderByCreatedAtDesc(memberId);

        return members;
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(() -> new CustomException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

    public Long countMemberId(long memberId){
        memberService.findVerifiedMember(memberId);
        memberService.verifyLoginMember(memberId);
        Long count = questionRepository.countByMember_MemberId(memberId);
        return count;
    }

}
