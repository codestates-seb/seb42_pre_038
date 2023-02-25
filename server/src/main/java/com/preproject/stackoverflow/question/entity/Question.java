package com.preproject.stackoverflow.question.entity;

import com.preproject.stackoverflow.answer.entity.Answer;
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
    private int viewCount = 0;

    @Column(nullable = false)
    private int voteCount = 0;

    // Question에 달린 Answer 개수
    @Column(nullable = false)
    private int answersCount = 0;


    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "question", cascade = {CascadeType.REMOVE, CascadeType.PERSIST})
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = {CascadeType.REMOVE, CascadeType.PERSIST})
    private List<QuestionVote> questionVotes = new ArrayList<>();

    public void setMember(Member member) {
        this.member = member;
        if(!member.getQuestions().contains(this)) {
            member.getQuestions().add(this);
        }
    }

    public void addAnswer(Answer answer) {
        this.getAnswers().add(answer);
        if(answer.getQuestion() != this) {
            answer.setQuestion(this);
        }
    }

    public void addQuestionVote(QuestionVote questionVote) {
        this.getQuestionVotes().add(questionVote);
        if(questionVote.getQuestion() != this) {
            questionVote.setQuestion(this);
        }
    }


}