import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FiThumbsUp } from 'react-icons/fi';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { MdPreview } from 'react-icons/md';

const ProfileItemWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const ProfileItemBox = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
`;
const StatsBox = styled.div`
  flex-grow: 1;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
`;
const StatsItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30px;
  height: 50px;
  font-size: 17px;
  color: #6a737c;
  > div {
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 5px;
  }
`;
const UserContentsBox = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const UserContentsTitleA = styled.a`
  width: 500px;
  font-size: 17px;
  text-align: left;
`;

const UserProfileItem = ({ contents }) => {
  return (
    <ProfileItemWrap>
      <ProfileItemBox>
        <UserContentsBox>
          <UserContentsTitleA href={`/questions/${contents.questionId}`}>
            {contents.title}
            <div
              dangerouslySetInnerHTML={{
                __html: contents && contents.answerContent,
              }}
            ></div>
          </UserContentsTitleA>
        </UserContentsBox>
        <StatsBox>
          <StatsItemBox>
            <div>{contents.voteCount}</div>
            <FiThumbsUp />
          </StatsItemBox>
          {contents.title ? (
            <>
              <StatsItemBox>
                <div>{contents.answersCount}</div>
                <RiQuestionAnswerLine />
              </StatsItemBox>
              <StatsItemBox>
                <div>{contents.viewCount}</div>
                <MdPreview />
              </StatsItemBox>
            </>
          ) : null}
        </StatsBox>
      </ProfileItemBox>
    </ProfileItemWrap>
  );
};
UserProfileItem.propTypes = {
  contents: PropTypes.object,
};

export default UserProfileItem;
