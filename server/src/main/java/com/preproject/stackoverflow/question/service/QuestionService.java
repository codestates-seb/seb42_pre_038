package com.preproject.stackoverflow.question.service;

import com.preproject.stackoverflow.domain.member.repository.MemberRepository;
import com.preproject.stackoverflow.domain.member.service.MemberService;
import com.preproject.stackoverflow.domain.question.entity.Question;
import com.preproject.stackoverflow.domain.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional

public class QuestionService {

    private final QuestionRepository questionRepository;
    private final MemberRepository memberRepository;
    private final MemberService memberService;
    private final AnswerRepository answerRepository;
    private final AnswerService answerService;


}
