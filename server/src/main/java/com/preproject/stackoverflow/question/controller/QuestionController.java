package com.preproject.stackoverflow.question.controller;

import com.preproject.stackoverflow.dto.MultiResponseDto;
import com.preproject.stackoverflow.question.dto.QuestionPostDto;
import com.preproject.stackoverflow.question.mapper.QuestionMapper;
import com.preproject.stackoverflow.question.service.QuestionService;
import com.preproject.stackoverflow.dto.SingleResponseDto;
import com.preproject.stackoverflow.question.dto.QuestionPatchDto;
import com.preproject.stackoverflow.question.entity.Question;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RequiredArgsConstructor // 의존성 주입 (생성자 생성)
@RestController // RestController의 용도는 객체 데이터를 Json 형태로 반환하는 것이다. 객체를 ResponseEntity로 감싸서 반환
@RequestMapping("/api/questions")
@Validated
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    //Question 등록
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        questionService.createQuestion(question);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.CREATED);
    }

    //Question 수정
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId, @Valid @RequestBody QuestionPatchDto patchDto) {
        Question question = mapper.questionPatchDtoToQuestion(patchDto);
        question.setQuestionId(questionId);
        questionService.updateQuestion(question);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
    }

    // 서치 기능 : title 로만.
    @GetMapping("/search")
    public ResponseEntity getQuestionBySearch(@RequestParam int page,
                                    @RequestParam int size,
                                    @RequestParam String keyword){

        Page<Question> pageQuestions = questionService.search(page, size, keyword);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.questionsToQuestionResponseDto(questions), pageQuestions), HttpStatus.OK);
    }

    //Question 페이지네이션
    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page, @Positive @RequestParam int size, @RequestParam int sort) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size, sort);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.questionsToQuestionResponseDto(questions), pageQuestions), HttpStatus.OK);
    }

    //Question 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //Vote up
    @PostMapping("/voteUp/{question-id}")
    public ResponseEntity VoteUpQuestion(@PathVariable("question-id") long questionId, @RequestParam long memberId) {
        Question voteUp = questionService.voteUp(questionId, memberId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(voteUp)), HttpStatus.OK);
    }

    //Vote down
    @PostMapping("/voteDown/{question-id}")
    public ResponseEntity voteDownQuestion(@PathVariable("question-id") long questionId, @RequestParam long memberId) {
        Question voteDown = questionService.voteDown(questionId, memberId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(voteDown)), HttpStatus.OK);
    }

    @PostMapping("/profile/{member-id}")
    public ResponseEntity getUserQuestions(@PathVariable("member-id") long memberId){
        List<Question> Questions = questionService.getMembers(memberId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionsToQuestionResponseDto(Questions)), HttpStatus.OK);
    }

    @GetMapping("/profile/{member-Id}")
    public ResponseEntity getProfile(@PathVariable("member-Id") long memberId){

        List<Question> Questions = questionService.getMembers(memberId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionsToQuestionResponseDto(Questions)), HttpStatus.OK);
    }

}
