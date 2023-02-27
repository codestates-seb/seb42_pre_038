import QuestionItem from './QuestionItem';
import styled from 'styled-components';
import Filter from '../ui/Filter';
import AskQuestionButton from '../ui/MainButton';
import Pagination from '../ui/Pagination';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllQuestion } from '../../api/answerAPI';

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

  function goToAsk() {
    navigate('/questions/ask');
  }

  const [isQuestion, setQuestion] = useState([]);
  //question 조회
  useEffect(() => {
    async function getQuestionFun() {
      const res = await getAllQuestion();
      setQuestion(res.data);
    }
    getQuestionFun();
  }, []);

  console.log(isQuestion);
  return (
    <QuestionContainerWrap>
      <QuestionListHeadBox>
        <QuestionListTitle>All Questions</QuestionListTitle>
        <AskQuestionButton ButtonProps={goToAsk}>
          Ask Questions
        </AskQuestionButton>
      </QuestionListHeadBox>
      <Filter />
      <QuestionListContainer>
        {isQuestion &&
          isQuestion.map((que) => (
            <QuestionItem key={que.questionId} question={que} />
          ))}
      </QuestionListContainer>
      <Pagination />
    </QuestionContainerWrap>
  );
};

export default QuestionList;
