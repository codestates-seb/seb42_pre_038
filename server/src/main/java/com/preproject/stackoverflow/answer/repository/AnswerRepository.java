package com.preproject.stackoverflow.answer.repository;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.entity.AnswerVote;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    // Answer 테이블에서 Question 컬럼에서 QuestionId로 원하는 데이터 조회 및 페이징 하기 위한 쿼리 메서드.
    Page<Answer> findAllByQuestion(Question questionId, Pageable pageable);

    Answer findByMember_MemberId(long memberId);

    //List<AnswerVote> findByMember_MemberId(long memberId);


    // QuestionService.delete 에서 답변이 달려있는지 확인하기 위한 쿼리 메서드
    Long countByQuestion(Question questionId);

    // 최근 5개
    List<Answer> findTop5ByMember_MemberIdOrderByCreatedAtDesc(Long memberId);

    /*  Optional<Answer> findByMember_MemberId(Long memberId);
    Optional<Answer>  findByQuestion_QuestionId(Long questionId);
*/
    Long countByMember_MemberId(Long memberId);
}
