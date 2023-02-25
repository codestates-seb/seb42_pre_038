package com.preproject.stackoverflow.question.repository;


import com.preproject.stackoverflow.question.entity.QuestionVote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {

    List<QuestionVote> findByMember_MemberId(long memberId);
}
