package com.preproject.stackoverflow.answer.entity;


import com.preproject.stackoverflow.audit.BaseTime;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Answer extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column//(nullable = false)
    private String title;

    @Column//(nullable = false, columnDefinition = "TEXT")
    private String answerContent;

    @Column//(nullable = false)
    private int voteCount = 0;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "question_id")
    private Question question;

    @OneToMany(mappedBy = "answer")
    private List<AnswerVote> answerVotes = new ArrayList<>();

    public void addMember(Member member) {
        this.member = member;
        if (!member.getAnswers().contains(this)) {
            member.getAnswers().add(this);
        }
    }

    public void addQuestion(Question question) {
        this.question = question;
        if (!question.getAnswers().contains(this)) {
            question.getAnswers().add(this);
        }
    }

    public void setAnswerVote(AnswerVote answerVote) {
        this.answerVotes = answerVotes;
        if(answerVote.getAnswer() != this) {
           answerVote.setAnswer(this);
        }
    }
}
