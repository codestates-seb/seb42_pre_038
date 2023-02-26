import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LeftNavBar from '../components/main/LeftNavBar';
import RightSideBar from '../components/main/RightSideBar';
import QuestionDetailComponent from '../components/question/QuestionDetail';
import AskQuestionButton from '../components/ui/MainButton';
const ContainerBox = styled.div`
  max-width: 1264px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const MainBox = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const QuestionDetailContainer = styled.div``;
const QuestionTitleBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const QuestionDetailInfoBox = styled.div`
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid #e3e6e8;
  display: flex;
`;
const InfoBox = styled.div`
  padding-bottom: 8px;
  margin-right: 16px;
`;
const InfoSpan = styled.span`
  color: hsl(210deg 8% 45%);
  font-size: 13px;
`;

const QuestionTitleH1 = styled.h1`
  font-size: 25px;
  line-height: 1.35;
  font-weight: normal;
  margin-bottom: 0;
  margin-bottom: 8px;
`;

const QuestionDetailButtonBox = styled.div`
  margin-left: 12px;
  flex-basis: 120px;
`;

const QuestionDetailBox = styled.div`
  display: flex;
`;

const QuestionDetail = () => {
  const navigate = useNavigate();

  const goToAsk = () => {
    navigate('/questions/ask');
  };

  return (
    <>
      <ContainerBox>
        <LeftNavBar />
        <QuestionDetailContainer>
          <MainBox>
            <QuestionTitleBox>
              <QuestionTitleH1>
                How do I write preprocessor (#if) code in the kotlin iOS part of
                a multiplatform project?
              </QuestionTitleH1>
              <QuestionDetailButtonBox>
                <AskQuestionButton ButtonProps={goToAsk}>
                  Ask Questions
                </AskQuestionButton>
              </QuestionDetailButtonBox>
            </QuestionTitleBox>
            <QuestionDetailInfoBox>
              <InfoBox>
                <InfoSpan>
                  Asked <strong>today</strong>
                </InfoSpan>
              </InfoBox>
              <InfoBox>
                <InfoSpan>
                  Modified <strong>today</strong>
                </InfoSpan>
              </InfoBox>
              <InfoBox>
                <InfoSpan>
                  Viewed <strong>4 times</strong>
                </InfoSpan>
              </InfoBox>
            </QuestionDetailInfoBox>
            <QuestionDetailBox>
              <QuestionDetailComponent />
              <RightSideBar />
            </QuestionDetailBox>
          </MainBox>
        </QuestionDetailContainer>
      </ContainerBox>
    </>
  );
};

export default QuestionDetail;
