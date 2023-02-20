package com.preproject.stackoverflow.answer.repository;

import com.preproject.stackoverflow.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Long countAnswerByMember_MemberId(Long memberId);
    Long countAnswerByQuestion_QuestionId(Long questionId);
}
