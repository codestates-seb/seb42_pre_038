package com.preproject.stackoverflow.question.repository;


import com.preproject.stackoverflow.question.entity.Question;
import com.preproject.stackoverflow.question.entity.QuestionVote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {

    List<QuestionVote> findByMember_MemberId(long memberId);

    //List<QuestionVote> findByMember_MemberIdAndQuestion(long memberId);



    List<QuestionVote> findByMember_MemberIdAndQuestion_QuestionId(long memberId, long questionId);
}
