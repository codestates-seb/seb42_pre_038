package com.preproject.stackoverflow.answer.repository;

import com.preproject.stackoverflow.answer.entity.AnswerVote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {

    List<AnswerVote> findByMember_MemberId(long memberId);

    AnswerVote findByMember(long memberId);

}
