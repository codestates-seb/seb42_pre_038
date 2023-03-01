import { useState } from 'react';
import ReactQuill from 'react-quill';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { patchEditAnswer } from '../api/answerAPI';
import LeftNavBar from '../components/main/LeftNavBar';
import RightSideBar from '../components/main/RightSideBar';
import MainButton from '../components/ui/MainButton';
import { MainBox } from './Home';

const ContainerBox = styled.div`
  max-width: 1264px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const AnswerEditWrap = styled.div`
  width: calc(100% - 365px - 24px);
`;

const AnswerEditHeadTitleBox = styled.div`
  background: hsl(47deg 87% 94%);
  border-color: hsl(47deg 69% 69%);
  color: hsl(210deg 8% 25%);
  border-style: solid;
  font-size: 13px;
  border-radius: 3px;
  border-width: 1px;
  padding: 26px 16px;
  p {
    &:first-child {
      margin-bottom: 1rem;
    }
  }
`;
const AnswerEditHeadP = styled.p`
  font-size: 13px;
`;
const AnswerEditBox = styled.div``;
const AnswerEditContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px;
`;

const AnswerEditLabel = styled.label`
  font-size: 1.15384615rem;
  color: hsl(210deg 8% 5%);
  font-family: inherit;
  font-weight: 600;
  padding: 0 2px;
  margin-bottom: 4px;
  cursor: pointer;
`;

const CancelButton = styled.a`
  background-color: #00000000;
  color: hsl(206deg 100% 40%);
  padding: 0.8em;
  font-size: 13px;
  cursor: pointer;
  font-weight: normal;
  line-height: var(--lh-sm);
  margin: 0 calc(var(--su8) / 2);

  &:hover {
    background-color: hsl(206deg 100% 97%);
    color: hsl(209deg 100% 38%);
  }
`;

const ButtonBox = styled.div`
  display: flex;
  padding: 30px 0;
`;

const AnswerEdit = () => {
  /*Quill modules*/
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ['image'],
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

  /* answer detail useNavigate() 두번째 인자 값 받아오기*/
  const { state } = useLocation();
  const navigate = useNavigate();

  /* answerContent 상태관리 */
  const [answerContent, setAnswerContent] = useState(state.answerContent);

  /* answerchangeHandler */
  const answerContentChangeHandler = (e) => {
    setAnswerContent(e);
  };

  /* saveEdit Event */
  const saveEditAnswer = () => {
    console.log(answerContent);
    EditAnswerFunc();
  };

  /* patchEditAnswer 요청*/
  const EditAnswerFunc = async () => {
    const response = await patchEditAnswer(
      state.answerId,
      state.questionId,
      answerContent
    );
    if (response) {
      navigate(`/questions/${state.questionId}`);
    } else {
      alert('답변 수정이 정상적으로 완료되지 않았습니다.');
    }
  };

  return (
    <ContainerBox>
      <LeftNavBar />
      <MainBox>
        <AnswerEditWrap>
          <AnswerEditHeadTitleBox>
            <AnswerEditHeadP>
              Your edit will be placed in a queue until it is peer reviewed.
            </AnswerEditHeadP>
            <AnswerEditHeadP>
              We welcome edits that make the post easier to understand and more
              valuable for readers. Because community members review edits,
              please try to make the post substantially better than how you
              found it, for example, by fixing grammar or adding additional
              resources and hyperlinks.
            </AnswerEditHeadP>
          </AnswerEditHeadTitleBox>
          <AnswerEditBox>
            <AnswerEditContent>
              <AnswerEditLabel htmlFor="answer">Answer</AnswerEditLabel>
              <ReactQuill
                id="answer"
                modules={modules}
                value={answerContent}
                onChange={answerContentChangeHandler}
              />
            </AnswerEditContent>
          </AnswerEditBox>
          <ButtonBox>
            <MainButton ButtonProps={saveEditAnswer}>Save edits</MainButton>
            <CancelButton>Cancel</CancelButton>
          </ButtonBox>
        </AnswerEditWrap>
        <RightSideBar />
      </MainBox>
    </ContainerBox>
  );
};

export default AnswerEdit;
