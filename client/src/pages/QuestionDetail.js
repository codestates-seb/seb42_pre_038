import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getQuestionDetail } from '../api/answerAPI';
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
  justify-content: space-between;
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

const InfoSpanStrong = styled.strong`
  margin-left: 3px;
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

  const { id } = useParams();
  const [isQuestionDetail, setIsQuestionDetail] = useState();

  useEffect(() => {
    async function getQuestionDetailFun() {
      const res = await getQuestionDetail(id);
      setIsQuestionDetail(res.data);
    }
    getQuestionDetailFun();
  }, [id]);

  return (
    <>
      <ContainerBox>
        <LeftNavBar />
        <QuestionDetailContainer>
          <MainBox>
            <QuestionTitleBox>
              <QuestionTitleH1>
                {isQuestionDetail && isQuestionDetail.title}
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
                  Asked
                  <InfoSpanStrong>
                    {isQuestionDetail &&
                      new Date(isQuestionDetail.createdAt).toLocaleString()}
                  </InfoSpanStrong>
                </InfoSpan>
              </InfoBox>
              <InfoBox>
                <InfoSpan>
                  Modified
                  <InfoSpanStrong>
                    {isQuestionDetail &&
                      new Date(isQuestionDetail.modifiedAt).toLocaleString()}
                  </InfoSpanStrong>
                </InfoSpan>
              </InfoBox>
              <InfoBox>
                <InfoSpan>
                  Viewed
                  <InfoSpanStrong>
                    {isQuestionDetail && isQuestionDetail.viewCount}
                  </InfoSpanStrong>
                </InfoSpan>
              </InfoBox>
            </QuestionDetailInfoBox>
            <QuestionDetailBox>
              <QuestionDetailComponent
                queDetail={isQuestionDetail && isQuestionDetail}
              />
              <RightSideBar />
            </QuestionDetailBox>
          </MainBox>
        </QuestionDetailContainer>
      </ContainerBox>
    </>
  );
};

export default QuestionDetail;
