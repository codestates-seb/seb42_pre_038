package com.preproject.stackoverflow.answer.repository;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.entity.AnswerVote;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    // Answer 테이블에서 Question 컬럼에서 QuestionId로 원하는 데이터 조회 및 페이징 하기 위한 쿼리 메서드.
    Page<Answer> findByQuestion(Long questionId, Pageable pageable);

    /*  Optional<Answer> findByMember_MemberId(Long memberId);
    Optional<Answer>  findByQuestion_QuestionId(Long questionId);
*/

}
