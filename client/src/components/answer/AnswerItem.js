import styled from 'styled-components';
import AnswerDetailMenu from '../ui/AnswerDetailMenu';
import Vote from '../ui/Vote';

const AnswerItemWrap = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const AnswerItemContainer = styled.div`
  border-bottom: 1px solid hsl(210deg 8% 90%);
  padding: 16px 0;
  display: flex;
  width: 728px;
`;
const AnswerDetailContentBox = styled.div`
  padding-right: 16px;
`;
const AnswerDetailContentP = styled.p``;

const AnswerItem = () => {
  return (
    <AnswerItemWrap>
      <AnswerItemContainer>
        <Vote />
        <AnswerDetailContentBox>
          <AnswerDetailContentP>
            Your regex is looking for the literal string word. You should use
            f-strings to use the value stored in the variable named word:
          </AnswerDetailContentP>
          <AnswerDetailMenu />
        </AnswerDetailContentBox>
      </AnswerItemContainer>
    </AnswerItemWrap>
  );
};

export default AnswerItem;
