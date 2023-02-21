import styled from 'styled-components';
import AnswerItem from './AnswerItem';

const AnswerCountSpan = styled.h2`
  font-weight: 400;
  font-size: 19px;
  margin-bottom: 8px;
`;
const AnswerList = () => {
  return (
    <>
      <AnswerCountSpan>2 Answers</AnswerCountSpan>
      <AnswerItem />
      <AnswerItem />
    </>
  );
};

export default AnswerList;
