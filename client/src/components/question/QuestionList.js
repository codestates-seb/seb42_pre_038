import QuestionItem from './QuestionItem';
import styled from 'styled-components';
import Filter from '../ui/Filter';
const QuestionContainerWrap = styled.div``;

const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const QuestionListHeadBox = styled.div`
  display: flex;
  margin-bottom: 24px;
`;
const QuestionListTitle = styled.h1`
  flex: 1;
  font-size: 2.07692308rem;
  font-weight: normal;
`;

const AskButton = styled.button`
  background-color: hsl(206deg 100% 52%);
  padding: 0.8em;
  font-size: 13px;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  cursor: pointer;
  display: inline-block;
  font-weight: normal;
  position: relative;
  outline: none;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

const QuestionList = () => {
  return (
    <QuestionContainerWrap>
      <QuestionListHeadBox>
        <QuestionListTitle>All Questions</QuestionListTitle>
        <AskButton>Ask Question</AskButton>
      </QuestionListHeadBox>
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
