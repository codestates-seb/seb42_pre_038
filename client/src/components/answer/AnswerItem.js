import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AnswerDetailMenu from '../ui/AnswerDetailMenu';
import Vote from '../ui/Vote';
import PropTypes from 'prop-types';
const AnswerItemWrap = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const AnswerItemContainer = styled.div`
  border-bottom: 1px solid hsl(210deg 8% 90%);
  padding: 16px 0;
  display: grid;
  float: left;
  width: 728px;
  grid-template-rows: max-content 1fr;
  grid-template-columns: max-content 1fr;
`;
const AnswerDetailContentBox = styled.div`
  padding-right: 16px;
`;
const AnswerDetailContent = styled.div``;

const AnswerItem = ({ answer }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/posts/${answer.answerId}/edit`);
  };
  console.log(answer);
  return (
    <AnswerItemWrap>
      <AnswerItemContainer>
        <Vote voteCount={answer && answer.voteCount} />
        <AnswerDetailContentBox>
          <AnswerDetailContent
            dangerouslySetInnerHTML={{ __html: answer.answerContent }}
          ></AnswerDetailContent>
          <AnswerDetailMenu clickHandler={clickHandler} answer={answer} />
        </AnswerDetailContentBox>
      </AnswerItemContainer>
    </AnswerItemWrap>
  );
};
AnswerItem.propTypes = {
  answer: PropTypes.object,
};
export default AnswerItem;
