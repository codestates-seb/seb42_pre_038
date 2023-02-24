import QuestionItem from './QuestionItem';
import styled from 'styled-components';
import Filter from '../ui/Filter';
import { useNavigate } from 'react-router-dom';
import AskQuestionButton from '../ui/MainButton';
import Pagination from '../ui/Pagination';
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

const QuestionList = () => {
  const navigate = useNavigate();
  return (
    <QuestionContainerWrap>
      <QuestionListHeadBox>
        <QuestionListTitle>All Questions</QuestionListTitle>
        <AskQuestionButton
          onClick={() => {
            navigate('/questions/ask');
          }}
        >
          Ask Questions
        </AskQuestionButton>
      </QuestionListHeadBox>
      <Filter />
      <QuestionListContainer>
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
      </QuestionListContainer>
      <Pagination />
    </QuestionContainerWrap>
  );
};

export default QuestionList;
