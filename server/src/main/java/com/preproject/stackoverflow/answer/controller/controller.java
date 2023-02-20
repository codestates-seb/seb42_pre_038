package com.preproject.stackoverflow.answer.controller;


import com.preproject.stackoverflow.answer.dto.AnswerPatchDto;
import com.preproject.stackoverflow.answer.dto.AnswerPostDto;
import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.repository.mapper.AnswerMapper;
import com.preproject.stackoverflow.answer.service.AnswerService;
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
@RestController // RestController의 주용도는 Json 형태로 객체 데이터를 반환하는 것이다. 객체를 ResponseEntity로 감싸서 반환
@RequestMapping("/answers")
@Validated
public class controller {

    private final AnswerService answerService;
    private final MemberService memberService;
    private final AnswerMapper mapper;


    // Answer 등록
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){

        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.CREATED);

    }

    // Answer 수정
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto patchDto){

        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(patchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.OK);
    }

    // Answer 조회
    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") @Positive long answerId){

        Answer answer = answerService.findAnswer(answerId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.OK);
    }


    // Answer 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId){

        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Vote Up 기능
    @PostMapping("/voteUp/{answer-id}")
    public ResponseEntity VoteUpAnswer(@PathVariable("answer-id") long answerId){

        Answer voteUp = answerService.voteUp(answerId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(voteUp)), HttpStatus.OK);
    }

    // Vote Down 기능
    @PostMapping("/downVote/{answer-id}")
    public ResponseEntity voteDownAnswer(@PathVariable("answer-id") long answerId){
        Answer voteDown = answerService.voteDown(answerId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(voteDown)), HttpStatus.OK);
    }




}
