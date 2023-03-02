import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuestionDetialMenuBox = styled.div`
  display: flex;
  margin: 50px 0;
`;
const MenuBox = styled.div`
  flex: 1;
`;
const MenuSpan = styled.span`
  cursor: pointer;
  margin: calc(var(--su8) / 2);
  color: hsl(210deg 8% 45%);
  &:hover {
    color: hsl(210deg 8% 55%);
  }
`;
const UserInfoBox = styled.div`
  width: 200px;
  border-radius: 3px;
  background-color: #d9eaf7;
  padding: 5px 6px 7px 7px;
`;
const UserSpanBox = styled.div`
  margin-top: 1px;
  margin-bottom: 4px;
`;

const UserSpan = styled.span`
  font-size: 12px;
  color: hsl(210deg 8% 45%);
`;
const UserDetailImgBox = styled.div`
  float: left;
  width: 32px;
  height: 32px;
`;
const UserImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

const UserDetailBox = styled.div`
  float: left;
  margin-left: 8px;
  width: calc(100% - 40px);
`;

const UserDetailSpan = styled.span`
  font-size: 13px;
  color: hsl(206deg 100% 40%);
`;

const QuestionDetailMenu = ({ goToEdit, questionDelete, question }) => {
  /* goToEdit 함수 실행 */
  const goToEditFunc = () => {
    goToEdit();
  };

  /* questionDelete 함수 실행 */
  const questionDeleteFunc = () => {
    questionDelete();
  };

  /* localStorage에 저장된 memberId 가져오기 */
  const memberId = localStorage.getItem('memberId');

  return (
    <QuestionDetialMenuBox>
      <MenuBox>
        <MenuSpan>Share</MenuSpan>
        <MenuSpan onClick={goToEditFunc}>Edit</MenuSpan>
        <MenuSpan>Follow</MenuSpan>
        {question && Number(memberId) === question.memberId ? (
          <MenuSpan onClick={questionDeleteFunc}>Delete</MenuSpan>
        ) : null}
      </MenuBox>
      <UserInfoBox>
        <UserSpanBox>
          <UserSpan>asked 12 hours ago</UserSpan>
        </UserSpanBox>
        <UserDetailImgBox>
          <UserImg
            src={`https://api.dicebear.com/5.x/identicon/svg?seed=${question.memberId}`}
          />
        </UserDetailImgBox>
        <UserDetailBox>
          <UserDetailSpan>{question && question.name}</UserDetailSpan>
        </UserDetailBox>
      </UserInfoBox>
    </QuestionDetialMenuBox>
  );
};
QuestionDetailMenu.propTypes = {
  goToEdit: PropTypes.func,
  questionDelete: PropTypes.func,
  question: PropTypes.object,
};
export default QuestionDetailMenu;
