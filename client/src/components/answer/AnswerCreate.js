import styled from 'styled-components';
import MainButton from '../ui/MainButton';
const AnswerCreateWrap = styled.div``;
const AnswerCountSpan = styled.h2`
  font-weight: 400;
  font-size: 19px;
  margin-bottom: 8px;
  padding-top: 20px;
`;

const AnswerInputBox = styled.div``;
const AnsweTextArea = styled.textarea`
  height: 200px;
  width: 100%;
  padding: 10px;
  line-height: 1.3;
  font-size: 1.15384615rem;
  tab-size: 4;
`;

const AnswerButtonBox = styled.div`
  padding: 20px 0 15px 0;
`;
const AnswerCreate = () => {
  return (
    <AnswerCreateWrap>
      <AnswerCountSpan>Your Answer</AnswerCountSpan>
      <AnswerInputBox>
        <AnsweTextArea></AnsweTextArea>
      </AnswerInputBox>
      <AnswerButtonBox>
        <MainButton>Post Your Answer</MainButton>
      </AnswerButtonBox>
    </AnswerCreateWrap>
  );
};

export default AnswerCreate;
