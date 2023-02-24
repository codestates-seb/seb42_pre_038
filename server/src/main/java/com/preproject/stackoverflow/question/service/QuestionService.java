package com.preproject.stackoverflow.question.service;


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
    public Question createQuestion(Question question, long memberId) {
        System.out.println("아아아아");
        Member member = memberService.getMember(memberId);
        System.out.println("아아아아");
        //Question question = questionService.getQuestion(answer.getQuestion().getQuestionId());
        question.addMember(member);
        System.out.println("아아아아123123123");
        //answer.addQuestion(question);
        // question.plusAnswerCount(); 경민님 question에서 달릴거. 답변 갯수

        return questionRepository.save(question);
    }

        // Question 수정

        public Question updateQuestion(Question question, Long questionId){
            Question findQuestion = findVerifiedQuestion(questionId);


            findQuestion.setContent(question.getContent());

            return questionRepository.save(findQuestion);
        }

        // Question 조회
        public Question findQuestion(long questionId){

            return findVerifiedQuestion(questionId);
        }

        // Question 목록 조회  // vote 순인지 newest 순인지 알것
        public Page<Question> findQuestions(int page,
        int size, int sort, Long questionId){


            Page<Question> questionPage = null;
            if (sort == 0) { // Newest 정렬
                questionPage = questionRepository.findByQuestion
                        (questionId, PageRequest.of
                                (page - 1, size, Sort.by
                                                ("questionId")
                                        .descending()));
                return questionPage;

            } else { // voteCount 순 정렬
                Page<Question> QuestionPage =
                        questionRepository.findByQuestion
                                (questionId, PageRequest.of
                                        (page - 1, size, Sort.by
                                                        ("voteCount")
                                                .descending())); // vote 순
                return questionPage;

            }
        }

        // Question 삭제
        public void deleteQuestion(long questionId){
            Question findQuestion = findVerifiedQuestion(questionId);


            //Quesiton quesiton = questionService.findVerifiedQuestion(findAnswer.getQuestion().getQuestionId());
            // quesiton.minusAnswerCount(); // 경민님 파트 상의

            questionRepository.delete(findQuestion);
        }

        // vote Up
        public Question voteUp(long questionId, long memberId){
            Question findQuestion = findVerifiedQuestion(questionId);


            // 중복 보트 검사 ( if null이 아니라면 중복이기 때문에 Exception 발생)
            Optional.ofNullable(questionVoteRepository.findByMember_MemberId(memberId))
                    .ifPresent(Exception-> {throw new CustomException(ExceptionCode.VOTE_EXISTS);});




            // 보트 추가
            QuestionVote questionVote = new QuestionVote();

            // 연관관계 입력
            questionVote.setquestion(findQuestion(questionId));
            questionVote.setMember(memberService.getMember(memberId));

            // QuestionVote 데이터 DB에 저장
            questionVoteRepository.save(questionVote);

            // Question 테이블에 voteCount(답변에 달린 Question 수) 업데이트 및 저장
            findQuestion.setVoteCount(findQuestion.getVoteCount() +1);
            Question updateQuestion = questionRepository.save(findQuestion);

            return updateQuestion;
        }

        // vote Down
        public Question voteDown(long questionId, long memberId){
            Question findQuestion = findVerifiedQuestion(questionId);


            // 중복 보트 검사
            Optional.ofNullable(questionVoteRepository.findByMember_MemberId(memberId))
                    .ifPresent(Exception-> {throw new CustomException(ExceptionCode.VOTE_EXISTS);});




            // 보트 추가
            QuestionVote questionVote = new QuestionVote();
            questionVote.setQuestion(findQuestion(questionId));
            questionVote.setMember(memberService.getMember(memberId));

            questionVoteRepository.save(questionVote);

            // Question 엔티티에 voteCount 수정

            findQuestion.setVoteCount(findQuestion.getVoteCount() - 1);

            // Question 엔티티에  변경사항 저장
            Question updateQuestion = questionRepository.save(findQuestion);

            return updateQuestion;
        }


        @Transactional(readOnly = true)
        public Question findVerifiedQuestion(long questionId){
            System.out.println("아아아아");
            Optional<Question> optionalQuestion = questionRepository.findById(questionId);
            // 답변이 DB에 존재하는지 확인
            // orElseThrow -> 가져온 값이 null이면 제외

            Question findQuestion = optionalQuestion.orElseThrow(() ->
                    new CustomException(ExceptionCode.QUESTION_NOT_FOUND));

            return findQuestion;
        }


}
