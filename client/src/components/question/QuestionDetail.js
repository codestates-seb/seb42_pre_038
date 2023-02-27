import styled from 'styled-components';
import AnswerCreate from '../answer/AnswerCreate';
import AnswerList from '../answer/AnswerList';
import QuestionDetailMenu from '../ui/QuestionDetailMenu';
import Vote from '../ui/Vote';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const QuestionDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionDetailContainer = styled.div`
  display: grid;
  float: left;
  width: 728px;
  margin: 0;
  padding: 0;
  grid-template-rows: max-content 1fr;
  grid-template-columns: max-content 1fr;
`;

const QuestionDetailContent = styled.div`
  font-size: 15px;
  line-height: 1.5;
`;

const QuestionDetailContentBox = styled.div`
  padding-right: var(--su16);
  grid-column: 2;
  width: auto;
  min-width: 0;
`;
const AnswerBox = styled.div``;

const QuestionDetail = ({ queDetail }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/questions/1/edit');
  };

  return (
    <QuestionDetailWrap>
      <QuestionDetailContainer>
        <Vote voteCount={queDetail && queDetail.voteCount} />
        <QuestionDetailContentBox>
          <QuestionDetailContent
            dangerouslySetInnerHTML={{ __html: queDetail && queDetail.content }}
          />

          <QuestionDetailMenu clickHandler={clickHandler} />
        </QuestionDetailContentBox>
      </QuestionDetailContainer>
      <AnswerBox>
        <AnswerList />
      </AnswerBox>
      <AnswerBox>
        <AnswerCreate />
      </AnswerBox>
    </QuestionDetailWrap>
  );
};

QuestionDetail.propTypes = {
  queDetail: PropTypes.object,
};
export default QuestionDetail;
