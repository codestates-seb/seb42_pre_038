import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AnswerDetailMenu from '../ui/AnswerDetailMenu';
import Vote from '../ui/Vote';
import PropTypes from 'prop-types';
import {
  deleteAnswer,
  postAnswerVoteDown,
  postAnswerVoteUp,
} from '../../api/answerAPI';
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

  /* answer Edit 페이지 이동*/
  const goToAnswerEdit = () => {
    navigate(`/answers/${answer.answerId}/edit`, { state: answer });
  };
  /* answer 삭제 요청 */
  const answerDelete = async () => {
    await deleteAnswer(answer.answerId);
    navigate('/');
  };

  /* voteUp  요청 */
  const postAnswerVoteUpFunc = async () => {
    const res = await postAnswerVoteUp(`${answer.answerId}`);
    if (res) {
      window.location.reload();
    }
  };

  /* voteDown 요청 */
  const postAnswerVoteDownFunc = async () => {
    const res = await postAnswerVoteDown(`${answer.answerId}`);
    if (res) {
      window.location.reload();
    }
  };

  return (
    <AnswerItemWrap>
      <AnswerItemContainer>
        <Vote
          voteCount={answer && answer.voteCount}
          VoteUpProps={postAnswerVoteUpFunc}
          VoteDownProps={postAnswerVoteDownFunc}
        />
        <AnswerDetailContentBox>
          <AnswerDetailContent
            dangerouslySetInnerHTML={{ __html: answer.answerContent }}
          ></AnswerDetailContent>
          <AnswerDetailMenu
            goToAnswerEdit={goToAnswerEdit}
            answerDelete={answerDelete}
            answer={answer}
          />
        </AnswerDetailContentBox>
      </AnswerItemContainer>
    </AnswerItemWrap>
  );
};
AnswerItem.propTypes = {
  answer: PropTypes.object,
};
export default AnswerItem;
