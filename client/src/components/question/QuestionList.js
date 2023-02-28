import QuestionItem from './QuestionItem';
import styled from 'styled-components';
import Filter from '../ui/Filter';
import AskQuestionButton from '../ui/MainButton';
import Paging from '../ui/Pagination';
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

  //Filter
  const [filterOption, setFilterOption] = useState(0);
  //Question
  const [isQuestion, setQuestion] = useState([]);
  //Pagenation
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  //question, pagination 조회 및 렌더링
  useEffect(() => {
    async function PaginationFilter() {
      const res = await getAllQuestion(page, filterOption);
      console.log(res);
      setQuestion(res.data);
      setPage(res.pageInfo.page);
      console.log(res.pageInfo.totalElements);
      setCount(res.pageInfo.totalElements);
    }
    PaginationFilter();
  }, [page, count, filterOption]);

  console.log(isQuestion);
  return (
    <QuestionContainerWrap>
      <QuestionListHeadBox>
        <QuestionListTitle>All Questions</QuestionListTitle>
        <AskQuestionButton ButtonProps={goToAsk}>
          Ask Questions
        </AskQuestionButton>
      </QuestionListHeadBox>
      <Filter setFilterOption={setFilterOption} />
      <QuestionListContainer>
        {isQuestion &&
          isQuestion.map((que) => (
            <QuestionItem key={que.questionId} question={que} />
          ))}
      </QuestionListContainer>
      <Paging page={page} count={count} setPage={setPage} />
    </QuestionContainerWrap>
  );
};

export default QuestionList;
