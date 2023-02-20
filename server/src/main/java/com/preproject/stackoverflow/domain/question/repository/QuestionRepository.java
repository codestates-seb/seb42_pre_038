package com.preproject.stackoverflow.domain.question.repository;

import com.preproject.stackoverflow.domain.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

interface QuestionRepository

public class QuestionRepository {

    Page<Question> findAll(Pageable pageable);

    Page<Question> findAllByQuestionTitleContainsIgnoreCaseOrQuestionProblemBodyContainsIgnoreCase(
            String title, String bodyMain, Pageable pageable);

    Page<Question> findAllByAnswersEmpty(Pageable pageable);

    Page<Question> findAllByMemberMemberId(Long memberId, Pageable pageable);
}
