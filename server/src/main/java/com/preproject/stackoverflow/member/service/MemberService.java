package com.preproject.stackoverflow.member.service;

import com.preproject.stackoverflow.exception.CustomException;
import com.preproject.stackoverflow.exception.ExceptionCode;
import com.preproject.stackoverflow.member.dto.MemberDto;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.member.mapper.MemberMapper;
import com.preproject.stackoverflow.member.repository.MemberRepository;
import com.preproject.stackoverflow.security.utils.CustomAuthorityUtils;
import io.jsonwebtoken.JwtException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public Member registerMember(Member member) {
        verifyExistsEmail(member.getEmail());

        //패스워드 암호화 과정 필요
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);

        return savedMember;
    }

    public Member registerMemberOAuth2(Member member) {
        Optional<Member> findMember = memberRepository.findByEmail(member.getEmail());
        if(findMember.isPresent()) {
            return findMember.get();
        }
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);

        return savedMember;
    }

    @Transactional(readOnly = true)
    public Member getMember(Long memberId) {
        verifyLoginMember(memberId);
        Member member = findVerifiedMember(memberId);

        return member;
    }

    public Member updateMember(Member member) {
        verifyLoginMember(member.getMemberId());
        Member verifiedMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getName()).ifPresent(name -> verifiedMember.setName(name));
        //패스워드 암호화 과정 필요
        Optional.ofNullable(member.getPassword()).ifPresent(password -> verifiedMember.setPassword(password));

        return verifiedMember;
    }

    public void deleteMember(Long memberId) {
        verifyLoginMember(memberId);

        memberRepository.deleteById(memberId);
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);

        if (member.isPresent()) {
            throw new CustomException(ExceptionCode.MEMBER_EXISTS);
        }
    }

    public Member findVerifiedMember(Long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);
        Member verifiedMember = member.orElseThrow(() -> new CustomException(ExceptionCode.MEMBER_NOT_FOUND));


        return verifiedMember;
    }

    public void verifyLoginMember(Long memberId) {
        if(!getLoginMemberId().equals(memberId)) {
            throw new CustomException(ExceptionCode.MISMATCHED_MEMBER_EXCEPTION);
        }
    }

    private Long getLoginMemberId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Member member = memberRepository.findByEmail(authentication.getName()).get();

        return member.getMemberId();
    }

}
