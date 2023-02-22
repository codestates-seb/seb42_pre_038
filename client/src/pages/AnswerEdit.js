import styled from 'styled-components';
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

const AnswerEditBodyInput = styled.textarea`
  padding: 10px;
  margin: -1px 0 0;
  height: 200px;
  line-height: 1.3;
  width: 100%;
  font-family: var(--ff-mono);
  font-size: 1.15384615rem;
  tab-size: 4;
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
              <AnswerEditBodyInput id="answer"></AnswerEditBodyInput>
            </AnswerEditContent>
          </AnswerEditBox>
          <ButtonBox>
            <MainButton>Save edits</MainButton>
            <CancelButton>Cancel</CancelButton>
          </ButtonBox>
        </AnswerEditWrap>
        <RightSideBar />
      </MainBox>
    </ContainerBox>
  );
};

export default AnswerEdit;
