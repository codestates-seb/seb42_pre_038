package com.preproject.stackoverflow.answer.controller;


import com.preproject.stackoverflow.answer.dto.AnswerPatchDto;
import com.preproject.stackoverflow.answer.dto.AnswerPostDto;
import com.preproject.stackoverflow.answer.entity.Answer;
import com.preproject.stackoverflow.answer.mapper.AnswerMapper;
import com.preproject.stackoverflow.answer.service.AnswerService;
import com.preproject.stackoverflow.dto.MultiResponseDto;
import com.preproject.stackoverflow.dto.SingleResponseDto;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.member.mapper.MemberMapper;
import com.preproject.stackoverflow.member.service.MemberService;
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
@RestController // RestController의 주용도는 Json 형태로 객체 데이터를 반환하는 것이다. 객체를 ResponseEntity로 감싸서 반환
@RequestMapping("/api/answers")
@Validated
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    // Answer 등록
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){

        Answer answer = mapper.answerPostDtoToAnswer(answerPostDto);
        answerService.createAnswer(answer);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.CREATED);
    }

    // Answer 수정
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId, @Valid @RequestBody AnswerPatchDto patchDto){
        Answer answer = mapper.answerPatchDtoToAnswer(patchDto);
        answer.setAnswerId(answerId);
        answerService.updateAnswer(answer);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.OK);
    }

    // Answer 조회
    @GetMapping("/{question-id}")        // ("/{answer-id}")
    public ResponseEntity getAnswers(@Positive @RequestParam int page, @Positive @RequestParam int size, @Positive @RequestParam("sort") int sort, @PathVariable("question-id") @Positive Long questionId){
        Page<Answer> pageAnswers = answerService.findAnswers(page, size, sort, questionId);
        List<Answer> answers = pageAnswers.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.answersToAnswerResponseDto(answers), pageAnswers), HttpStatus.OK);
    }


    // Answer 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId){

        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Vote Up 기능
    @PostMapping("/voteUp/{answer-id}")
    public ResponseEntity VoteUpAnswer(@PathVariable("answer-id") long answerId, @RequestParam long memberId ){

        Answer voteUp = answerService.voteUp(answerId, memberId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(voteUp)), HttpStatus.OK);
    }

    // Vote Down 기능
    @PostMapping("/voteDown/{answer-id}")
    public ResponseEntity voteDownAnswer(@PathVariable("answer-id") long answerId, @RequestParam long memberId){
        Answer voteDown = answerService.voteDown(answerId, memberId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(voteDown)), HttpStatus.OK);
    }


    @PostMapping("/profile/{member-Id}")
    public ResponseEntity getProfile(@PathVariable("member-Id") long memberId){
        List<Answer> members = answerService.getMembers(memberId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answersToAnswerResponseDto(members)), HttpStatus.OK);
    }

}
