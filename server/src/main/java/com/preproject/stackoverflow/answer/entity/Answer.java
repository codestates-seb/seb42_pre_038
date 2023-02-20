package com.preproject.stackoverflow.answer.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.lang.reflect.Member;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@CrossOrigin //
@Table(name= "ANSWERS")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false, columnDefinition = "Text") // Column Definition 을 이용하면 원하는 컬럼 타입으로 데이터 추출이 가능하다.
    private String answerContents;                        // TEXT: 65,535 bytes (~64Kb, 21,844 UTF-8 encoded characters)

    @Transient
    private long memberId;

    @Transient
    private long questionId; // Transient는 엔티티 객체의 데이터와 테이블의 컬럼(column)과 매핑하고 있는 관계를 제외하기 위해 사용합니다
                             //

    @Column
    private int scores;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime modifiedAt;

    //--------------------------------- 연관 관계 매핑---------------------------



    public void addMember(Member member){        // member 잘못되있음. 머지한다음에 바꿔야함.
        if (this.member != null){
            this.member.getAnswers().remove(this);
        }
        this.member = member;
        this.member.getAnswer().add(this);
    }

    public void addQuestion(Quesiton quesiton){
        if(this.question != null){
            this.question.getAnswers().remove(this);
        }
        this.question = quesiton;
        this.question.getAnswers().add(this);
    }

}
