package com.preproject.stackoverflow.member.entity;

import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.audit.BaseTime;
import com.preproject.stackoverflow.question.entity.Question;
import com.preproject.stackoverflow.question.entity.QuestionVote;
import lombok.Builder;
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
public class Member extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(nullable = false, length = 10)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, length = 100)
    private String password;

    @Column
    private String profileImageUrl;

    @Enumerated(value = EnumType.STRING)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<QuestionVote> questionVotes = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<QuestionVote> answerVotes = new ArrayList<>();

    public enum MemberStatus {
        MEMBER_ACTIVE("활동중"),
        MEMBER_SLEEP("휴면 상태"),
        MEMBER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        MemberStatus(String status) {
            this.status = status;
        }
    }
}
