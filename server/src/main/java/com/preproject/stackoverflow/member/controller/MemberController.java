package com.preproject.stackoverflow.member.controller;

import com.preproject.stackoverflow.dto.SingleResponseDto;
import com.preproject.stackoverflow.member.dto.MemberDto;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.member.mapper.MemberMapper;
import com.preproject.stackoverflow.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    @PostMapping
    public ResponseEntity postMember(@RequestBody MemberDto.Post memberPostDto) {
        Member member = memberMapper.memberPostToMember(memberPostDto);
        Member createdMember = memberService.registerMember(member);

        return ResponseEntity.created(URI.create("/api/members/" + createdMember)).build();
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") Long memberId) {
        Member member = memberService.getMember(memberId);
        MemberDto.Response response = memberMapper.memberToMemberResponse(member);

        return new ResponseEntity(new SingleResponseDto(response), HttpStatus.OK);
    }

    //회원 정보에서 question 정보 같이 응답 연관관계 매핑 후 구현
    @GetMapping("/{member-id}/qna")
    public ResponseEntity getMemberProfile() {
        return null;
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") Long memberId, @RequestBody MemberDto.Patch memberPatchDto) {
        Member member = memberMapper.memberPatchToMember(memberPatchDto);
        member.setMemberId(memberId);
        Member updateMember = memberService.updateMember(member);

        MemberDto.Response response = memberMapper.memberToMemberResponse(updateMember);

        return new ResponseEntity(new SingleResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") Long memberId) {
        memberService.deleteMember(memberId);

        return ResponseEntity.noContent().build();
    }

}
