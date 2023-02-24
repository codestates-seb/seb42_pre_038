package com.preproject.stackoverflow.question.entity;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.entity.AnswerVote;
import com.preproject.stackoverflow.audit.BaseTime;
import com.preproject.stackoverflow.member.entity.Member;
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
public class Question extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(nullable = false)
    private int voteCount = 0;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @OneToMany(mappedBy = "question")
    private List<QuestionVote> questionVotes = new ArrayList<>();

    public void addMember(Member member) {
        this.member = member;
        if (!member.getQuestions().contains(this)) {
            member.getQuestions().add(this);
        }
    }

    public void addQuestion(Question question) {
        this.question = question;
        if (!question.getQuestions().contains(this)) {
            question.getQuestions().add(this);
        }
    }

    public void setAnswerVote(AnswerVote answerVote) {
        this.questionVotes = questionVotes;
        if(questionVote.getQuestion() != this) {
            questionVote.setQuestion(this);
        }
    }


}
