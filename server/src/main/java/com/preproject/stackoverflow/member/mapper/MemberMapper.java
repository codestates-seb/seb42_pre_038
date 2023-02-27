package com.preproject.stackoverflow.member.mapper;

import com.preproject.stackoverflow.member.dto.MemberDto;
import com.preproject.stackoverflow.member.entity.Member;
import com.preproject.stackoverflow.question.dto.QuestionResponseDto;
import com.preproject.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post memberPostDto);
    Member memberPatchToMember(MemberDto.Patch memberPatchDto);
    MemberDto.Response memberToMemberResponse(Member member);
}
