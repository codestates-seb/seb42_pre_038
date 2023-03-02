import UserProfileItem from './UserProfileItem';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuestionContainerWrap = styled.div``;

const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserProfileList = ({ isUserContents, isUserAnswers }) => {
  return (
    <QuestionContainerWrap>
      <QuestionListContainer>
        {isUserContents &&
          isUserContents.map((item) => (
            <UserProfileItem key={item.questionId} contents={item} />
          ))}
        {isUserAnswers &&
          isUserAnswers.map((answer) => (
            <UserProfileItem key={answer.answerId} contents={answer} />
          ))}
      </QuestionListContainer>
    </QuestionContainerWrap>
  );
};

UserProfileList.propTypes = {
  isUserContents: PropTypes.object,
  isUserAnswers: PropTypes.object,
};

export default UserProfileList;
