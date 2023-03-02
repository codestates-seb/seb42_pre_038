import { useState } from 'react';
import ReactQuill from 'react-quill';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import LeftNavBar from '../components/main/LeftNavBar';
import RightSideBar from '../components/main/RightSideBar';
import MainButton from '../components/ui/MainButton';
import { MainBox } from './Home';
import { patchEditQuestion } from '../api/answerAPI';

const QuestionEditWrap = styled.div`
  width: calc(100% - 365px - 24px);
`;
const QuestionEditHeadTitleBox = styled.div`
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
const QuestionEditHeadP = styled.p`
  font-size: 13px;
`;

const ContainerBox = styled.div`
  max-width: 1264px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const QuestionEditBox = styled.div``;
const QuestionEditTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px;
`;
const QuestionEditLabel = styled.label`
  font-size: 1.15384615rem;
  color: hsl(210deg 8% 5%);
  font-family: inherit;
  font-weight: 600;
  padding: 0 2px;
  margin-bottom: 4px;
  cursor: pointer;
`;

const QuestionEditTitleInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 0.6em 0.7em;
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 3px;
  background-color: hsl(0deg 0% 100%);
  color: hsl(210deg 8% 5%);
  font-size: 13px;
  font-family: inherit;
`;

const QuestionEditContent = styled.div`
  display: flex;
  flex-direction: column;
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
const React = styled(ReactQuill)`
  height: 200px;
  margin-bottom: 50px;
`;
const QuestionEdit = () => {
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
  /* question detail useNavigate() 두번째 인자 값 받아오기*/
  const { state } = useLocation();

  /* title, content 상태관리 */
  const [title, setTitle] = useState(state.title);
  const [content, setContent] = useState(state.content);
  const { id } = useParams();
  const navigate = useNavigate();
  /* title, content  changeHandler */
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentChangeHandler = (e) => {
    setContent(e);
  };

  /* saveEdit Event */
  const saveEdit = () => {
    console.log(title);
    console.log(content);
    EditQuestionFunc();
  };

  /* patchEditQuestion 요청 */
  const EditQuestionFunc = async () => {
    const response = await patchEditQuestion(id, title, content);
    if (response) {
      navigate(`/questions/${id}`);
    }
  };

  /* cancel 버튼 클릭 */
  const cancelClickHandler = () => {
    navigate(-1);
  };

  return (
    <ContainerBox>
      <LeftNavBar />
      <MainBox>
        <QuestionEditWrap>
          <QuestionEditHeadTitleBox>
            <QuestionEditHeadP>
              Your edit will be placed in a queue until it is peer reviewed.
            </QuestionEditHeadP>
            <QuestionEditHeadP>
              We welcome edits that make the post easier to understand and more
              valuable for readers. Because community members review edits,
              please try to make the post substantially better than how you
              found it, for example, by fixing grammar or adding additional
              resources and hyperlinks.
            </QuestionEditHeadP>
          </QuestionEditHeadTitleBox>
          <QuestionEditBox>
            <QuestionEditTitle>
              <QuestionEditLabel htmlFor="title">Title</QuestionEditLabel>
              <QuestionEditTitleInput
                id="title"
                value={title}
                onChange={titleChangeHandler}
              ></QuestionEditTitleInput>
            </QuestionEditTitle>
            <QuestionEditContent>
              <QuestionEditLabel htmlFor="body">Body</QuestionEditLabel>
              <React
                modules={modules}
                value={content}
                onChange={contentChangeHandler}
              />
            </QuestionEditContent>
          </QuestionEditBox>
          <ButtonBox>
            <MainButton ButtonProps={saveEdit}>Save edits</MainButton>
            <CancelButton onClick={cancelClickHandler}>Cancel</CancelButton>
          </ButtonBox>
        </QuestionEditWrap>
        <RightSideBar />
      </MainBox>
    </ContainerBox>
  );
};

export default QuestionEdit;
