package com.preproject.stackoverflow.member.service;

import com.preproject.stackoverflow.exception.CustomException;
import com.preproject.stackoverflow.exception.ExceptionCode;
import com.preproject.stackoverflow.member.dto.MemberDto;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.member.mapper.MemberMapper;
import com.preproject.stackoverflow.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;

    public Member registerMember(Member member) {
        verifyExistsEmail(member.getEmail());

        //패스워드 암호화 과정 필요
        Member savedMember = memberRepository.save(member);

        return savedMember;
    }

    @Transactional(readOnly = true)
    public Member getMember(Long memberId) {
        //본인 계정일 때만 확인할 수 있어야함 Security 적용 후 구현
        Member member = findVerifiedMember(memberId);

        return member;
    }

    public Member updateMember(Member member) {
        //본인 계정일 때만 확인할 수 있어야 함 Security 적용 후 구현
        //token 에서 id 파싱 후 그 계정에 해당하는 정보 업데이트

        Member verifiedMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getName()).ifPresent(name -> verifiedMember.setName(name));
        //패스워드 암호화 과정 필요
        Optional.ofNullable(member.getPassword()).ifPresent(password -> verifiedMember.setPassword(password));

        return verifiedMember;
    }

    public void deleteMember(Long memberId) {
        verifyLoginMember(null, memberId);

        memberRepository.deleteById(memberId);
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);

        if (member.isPresent()) {
            throw new CustomException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    private Member findVerifiedMember(Long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);
        Member verifiedMember = member.orElseThrow(() -> new CustomException(ExceptionCode.MEMBER_NOT_FOUND));


        return verifiedMember;
    }

    private void verifyLoginMember(Long loginMemberId, Long memberId) {
        //token 을 이용한 본인 확인 메서드 구현
    }

}
