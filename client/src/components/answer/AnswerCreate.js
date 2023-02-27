import styled from 'styled-components';
import MainButton from '../ui/MainButton';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { postCreateAnswer } from '../../api/answerAPI';

const AnswerCreateWrap = styled.div``;
const AnswerCountSpan = styled.h2`
  font-weight: 400;
  font-size: 19px;
  margin-bottom: 8px;
  padding-top: 20px;
`;

const AnswerButtonBox = styled.div`
  padding: 20px 0 15px 0;
`;
const AnswerCreate = () => {
  const [answerValue, setAnswerValue] = useState('');
  const { id } = useParams();

  const handleAnswerChange = (e) => {
    setAnswerValue(e);
    console.log(e);
  };
  const handlerClickAnswer = () => {
    console.log('post answer');
    console.log(answerValue);
    postCreatAnswerFun();
  };

  const postCreatAnswerFun = async () => {
    const res = await postCreateAnswer(id, answerValue);

    if (res) {
      window.location.reload();
    }
  };
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, 'link'],
        [
          {
            color: [
              '#000000',
              '#e60000',
              '#ff9900',
              '#ffff00',
              '#008a00',
              '#0066cc',
              '#9933ff',
              'custom-color',
            ],
          },
          { background: [] },
        ],
      ],
    },
  };

  return (
    <AnswerCreateWrap>
      <AnswerCountSpan>Your Answer</AnswerCountSpan>
      <ReactQuill
        modules={modules}
        value={answerValue}
        onChange={handleAnswerChange}
      />
      <AnswerButtonBox>
        <MainButton ButtonProps={handlerClickAnswer}>
          Post Your Answer
        </MainButton>
      </AnswerButtonBox>
    </AnswerCreateWrap>
  );
};

export default AnswerCreate;
