import styled from 'styled-components';
import MainButton from '../ui/MainButton';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AnswerCreateWrap = styled.div``;
const AnswerCountSpan = styled.h2`
  font-weight: 400;
  font-size: 19px;
  margin-bottom: 8px;
  padding-top: 20px;
`;

const AnswerInputBox = styled.div`
  height: 250px;
`;

const AnswerButtonBox = styled.div`
  padding: 20px 0 15px 0;
`;
const AnswerCreate = () => {
  return (
    <AnswerCreateWrap>
      <AnswerCountSpan>Your Answer</AnswerCountSpan>
      <AnswerInputBox>
        <ReactQuill />
        {/* <AnsweTextArea></AnsweTextArea> */}
      </AnswerInputBox>
      <AnswerButtonBox>
        <MainButton>Post Your Answer</MainButton>
      </AnswerButtonBox>
    </AnswerCreateWrap>
  );
};

export default AnswerCreate;
