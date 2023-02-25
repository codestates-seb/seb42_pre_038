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

import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final QuestionVoteRepository questionVoteRepository;
    private final AnswerRepository answerRepository;
    private final MemberRepository memberRepository;
    private final MemberService memberService;

    //private final QuestionService questionService;

    //Question 등록
        public Question createQuestion(Question question) {



            return questionRepository.save(question);
        }

        // Question 수정

        public Question updateQuestion(Question question, Long questionId){
            Question findQuestion = findVerifiedQuestion(questionId);


            findQuestion.setTitle(question.getTitle());
            findQuestion.setContent(question.getContent());
            System.out.println(findQuestion.getTitle());
            return questionRepository.save(findQuestion);
        }

        // Question 조회 (viewCount)
        public Question findQuestion(long questionId){

            updateView(questionId);
            return findVerifiedQuestion(questionId);
        }

        // Question 목록 조회  // vote 순인지 newest 순인지 알것
        public Page<Question> findQuestions(int page, int size, int sort){


            // Newest 정렬

            if(sort == 0){
                Page<Question> questionPage = questionRepository.findAll(PageRequest.of(page , size, Sort.by("createdAt").descending()));
                return questionPage;

            // Active 순 (LastModified , 마지막 수정 날짜 순)

            }else if(sort == 1){

                Page<Question> questionPage = questionRepository.findAll(PageRequest.of(page , size, Sort.by("modifiedAt").descending()));
                return questionPage;

            // Unanswered 순
            }else if(sort == 2){
                Page<Question> questionPage = questionRepository.findAll(PageRequest.of(page , size, Sort.by("answersCount").ascending()));
                return questionPage;

            // voteCount 순
            }else{
                Page<Question> questionPage = questionRepository.findAll(PageRequest.of(page , size, Sort.by("voteCount").descending()));
                return questionPage;
            }







        }

        // Question 삭제
        public void deleteQuestion(long questionId){
            Question findQuestion = findVerifiedQuestion(questionId);

                // 만약 답변이 없다면 -> 삭제
            if(answerRepository.countByQuestion(findQuestion) == 0){

                questionRepository.deleteById(questionId);

                // 만약 답변이 있다면 -> 삭제 불가
            }else{

               throw new CustomException(ExceptionCode.QUESTION_EXIST_ANSWER);
            }




        }

        // vote Up
        public Question voteUp(long questionId, long memberId){
                Question findQuestion = findVerifiedQuestion(questionId);

            if (questionVoteRepository.findByMember_MemberId(memberId).isEmpty() == true){
                // 보트 추가
                QuestionVote questionVote = new QuestionVote();

                // 연관관계 입력
                questionVote.setQuestion(findQuestion(questionId));
                questionVote.setMember(memberService.getMember(memberId));

                // QuestionVote 데이터 DB에 저장
                questionVoteRepository.save(questionVote);

                // Question 테이블에 voteCount(답변에 달린 Answer 수) 업데이트 및 저장
                findQuestion.setVoteCount(findQuestion.getVoteCount() +1);
                Question updateAnswer = questionRepository.save(findQuestion);

                return updateAnswer;

            }else {

                throw new CustomException(ExceptionCode.VOTE_EXISTS);

            }
        }

        // vote Down
        public Question voteDown(long questionId, long memberId){
            Question findQuestion = findVerifiedQuestion(questionId);

            if (questionVoteRepository.findByMember_MemberId(memberId).isEmpty() == true){
                // 보트 추가
                QuestionVote questionVote = new QuestionVote();

                // 연관관계 입력
                questionVote.setQuestion(findQuestion(questionId));
                questionVote.setMember(memberService.getMember(memberId));

                // QuestionVote 데이터 DB에 저장
                questionVoteRepository.save(questionVote);

                // Question 테이블에 voteCount(답변에 달린 Answer 수) 업데이트 및 저장
                findQuestion.setVoteCount(findQuestion.getVoteCount() - 1);
                Question updateAnswer = questionRepository.save(findQuestion);

                return updateAnswer;

            }else {

                throw new CustomException(ExceptionCode.VOTE_EXISTS);


            }
        }


        // Question 조회수 로직
        @Transactional
        public void updateView(Long questionId){
            Question question = findVerifiedQuestion(questionId);

            question.setViewCount(question.getViewCount() +1 );
        }


        @Transactional(readOnly = true)
        public Question findVerifiedQuestion(long questionId){

            Optional<Question> optionalQuestion = questionRepository.findById(questionId);

            Question findQuestion = optionalQuestion.orElseThrow(() ->
                    new CustomException(ExceptionCode.QUESTION_NOT_FOUND));

            return findQuestion;
        }


}
