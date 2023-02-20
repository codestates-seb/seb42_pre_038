import QuestionItem from './QuestionItem';
import styled from 'styled-components';
import Filter from './Filter';
const QuestionContainerWrap = styled.div``;

const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionList = () => {
  return (
    <QuestionContainerWrap>
      <Filter />
      <QuestionListContainer>
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
      </QuestionListContainer>
    </QuestionContainerWrap>
  );
};

export default QuestionList;
