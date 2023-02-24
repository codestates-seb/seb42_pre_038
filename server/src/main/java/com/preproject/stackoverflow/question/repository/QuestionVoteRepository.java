package com.preproject.stackoverflow.question.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {

    List<QuestionVote> findByMember_MemberId(long memberId);
}
