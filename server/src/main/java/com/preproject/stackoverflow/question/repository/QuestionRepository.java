package com.preproject.stackoverflow.question.repository;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {


    Page<Question> findByTitleContaining(String string, Pageable pageable);

    List<Question> findTop5ByMember_MemberIdOrderByCreatedAtDesc(Long memberId);

    //Page<Question> findByQuestion(Long questionId, Pageable pageable);

}

