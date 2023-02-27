import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuestionItemWrap = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;
const QuestionItemBox = styled.div`
  width: 728px;
  padding: 16px;
  display: flex;
  border-top: 1px solid hsl(204deg 10% 90%);
  align-items: center;
  align-items: flex-start;
`;
const QuestionStatsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  text-align: right;
  gap: 6px;
  width: 108px;
  margin-bottom: 4px;
`;
const StatsSpan = styled.span``;
const QuestionContent = styled.div`
  max-width: 100%;
  flex-grow: 2;
`;
const QuestionContentTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.3846rem;
  font-weight: normal;
  font-size: 1.30769231rem;
`;

const QuestionContentA = styled.a`
  color: #0063bf;
  &:hover {
    color: #0a95ff;
  }
`;
const QuestionTagsBox = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 1em;
`;
const QuestionContentBox = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  justify-content: space-between;
`;
const QuestionContentUserBox = styled.div`
  flex-wrap: wrap;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 3px;
`;
const QuestionContentUserImg = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  display: block;
`;
const QuestionContentUserSpan = styled.span`
  font-size: 12px;
  margin: 2px;
`;

const QuestionItem = ({ question }) => {
  return (
    <QuestionItemWrap>
      <QuestionItemBox>
        <QuestionStatsBox>
          <StatsSpan>{question.voteCount} votes</StatsSpan>
          <StatsSpan>{question.answersCount} answers</StatsSpan>
          <StatsSpan>{question.viewCount} views</StatsSpan>
        </QuestionStatsBox>
        <QuestionContent>
          <QuestionContentTitle>
            <QuestionContentA href={`/questions/${question.questionId}`}>
              {question.title}
            </QuestionContentA>
          </QuestionContentTitle>
          <QuestionContentBox>
            <QuestionTagsBox>
              <div className="d-flex g4">
                <a className="s-tag" href="/">
                  jquery
                </a>
                <a className="s-tag" href="/">
                  python
                </a>
                <a className="s-tag" href="/">
                  c#
                </a>
              </div>
            </QuestionTagsBox>
            <QuestionContentUserBox>
              <QuestionContentUserImg></QuestionContentUserImg>
              <QuestionContentUserSpan>
                <a href="/">{question.name}</a>
              </QuestionContentUserSpan>
              <QuestionContentUserSpan>
                <strong>17K</strong>
              </QuestionContentUserSpan>
              <QuestionContentUserSpan>
                Asked 52 Secs age
              </QuestionContentUserSpan>
            </QuestionContentUserBox>
          </QuestionContentBox>
        </QuestionContent>
      </QuestionItemBox>
    </QuestionItemWrap>
  );
};
QuestionItem.propTypes = {
  question: PropTypes.object,
};
export default QuestionItem;
