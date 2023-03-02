package com.preproject.stackoverflow.answer.entity;

import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class AnswerVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public void setAnswer(Answer answer) {
        this.answer = answer;
        if(!answer.getAnswerVotes().contains(this)) {
            answer.getAnswerVotes().add(this);
        }
    }

    public void setMember(Member member) {
        this.member = member;
        if(!member.getAnswerVotes().contains(this)) {
            answer.getAnswerVotes().add(this);
        }
    }
}
