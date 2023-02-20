package com.preproject.stackoverflow.question.controller;

import com.preproject.stackoverflow.domain.question.dto.QuestionPostDto;
import com.preproject.stackoverflow.domain.question.mapper.QuestionMapper;
import com.preproject.stackoverflow.domain.question.service.QuestionService;
import com.preproject.stackoverflow.dto.SingleResponseDto;
import com.preproject.stackoverflow.question.dto.QuestionPatchDto;
import com.preproject.stackoverflow.question.entity.Question;
import lombok.RequiredArgsConstructor;
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
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)
                ), HttpStatus.CREATED);
    }

    //Question 수정
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionPatchDto patchDto) {
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(patchDto));
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
                HttpStatus.OK);
    }

    //Question 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),
                HttpStatus.OK)
    }

    //Question 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT)
    }

    //Vote
    @PostMapping("/voteUp/{question-id}")
    public ResponseEntity VoteUpQuestion(@PathVariable("question-id") long questionId) {
        Question voteUp = questionService.voteUp(questionId);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(voteUp)),
                HttpStatus.OK);
    }

    @PostMapping("/downVote/{question-id}")
    public ResponseEntity voteDownQuestion(@PathVariable("question-id") long questionId){
        Question voteDown = questionService.voteDown(questionId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(voteDown)),
                HttpStatus.OK);
    }

}
