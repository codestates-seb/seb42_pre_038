import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getAllAnswer } from '../../api/answerAPI';
import AnswerItem from './AnswerItem';

const AnswerCountSpan = styled.h2`
  font-weight: 400;
  font-size: 19px;
  margin-bottom: 8px;
`;
const AnswerList = () => {
  const [isAnswer, setAnswer] = useState();
  const { id } = useParams();
  //answer 조회
  useEffect(() => {
    async function getAnswerFun() {
      const res = await getAllAnswer(id);
      setAnswer(res.data);
    }
    getAnswerFun();
  }, []);
  console.log(isAnswer);
  return (
    <>
      <AnswerCountSpan>
        {isAnswer !== undefined ? isAnswer.length : 0} Answers
      </AnswerCountSpan>
      {isAnswer &&
        isAnswer.map((answer) => (
          <AnswerItem key={answer.answerId} answer={answer} />
        ))}
    </>
  );
};

export default AnswerList;
