package com.preproject.stackoverflow.question.entity;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class QuestionVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @ManyToOne
    @JoinColumn(name = "Question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public void setQuestion(Question question) {
        this.question = question;
        if(!question.getQuestionVotes().contains(this)) {
            question.getQuestionVotes().add(this);
        }
    }

    public void setMember(Member member) {
        this.member = member;
        if(!member.getQuestionVotes().contains(this)) {
            question.getQuestionVotes().add(this);
        }
    }
}
