import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { FiBookmark } from 'react-icons/fi';
import { IoTimerOutline } from 'react-icons/io5';
import styled from 'styled-components';

const VoteCountSpan = styled.span`
  font-size: 21px;
`;

const QuestionDetailIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 16px;
  .icon {
    cursor: pointer;
  }
  .upIcon,
  .downIcon {
    color: #babfc4;
  }
  .bookmarkIcon,
  .timerIcon {
    color: #babfc4;
    margin-top: 10px;
    margin-right: 3px;
  }
`;
const Vote = () => {
  return (
    <div>
      <QuestionDetailIcons>
        <AiFillCaretUp size={40} className="icon upIcon" />
        <VoteCountSpan>0</VoteCountSpan>
        <AiFillCaretDown size={40} className="icon downIcon" />
        <FiBookmark size={20} className="icon bookmarkIcon" />
        <IoTimerOutline size={20} className="icon timerIcon" />
      </QuestionDetailIcons>
    </div>
  );
};

export default Vote;
