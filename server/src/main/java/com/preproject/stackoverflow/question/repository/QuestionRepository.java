package com.preproject.stackoverflow.question.repository;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.question.entity.Question;
import com.preproject.stackoverflow.question.entity.QuestionVote;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
public interface QuestionRepository extends JpaRepository<Question, Long> {
    Page<Question> findByQuestion(Long questionId, Pageable pageable);;
}

