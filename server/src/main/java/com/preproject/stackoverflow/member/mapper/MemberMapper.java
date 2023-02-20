package com.preproject.stackoverflow.member.mapper;

import com.preproject.stackoverflow.member.dto.MemberDto;
import com.preproject.stackoverflow.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post memberPostDto);
    Member memberPatchToMember(MemberDto.Patch memberPatchDto);
    MemberDto.Response memberToMemberResponse(Member member);
}
