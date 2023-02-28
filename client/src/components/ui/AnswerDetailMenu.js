import styled from 'styled-components';
import User from '../../images/avatar.png';
import PropTypes from 'prop-types';

const QuestionDetialMenuBox = styled.div`
  display: flex;
  margin-top: 24px;
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
  color: hsl(206deg 100% 40%);
  font-size: 13px;
`;

const AnswerDetailMenu = ({ clickHandler, answer }) => {
  const gotoEdit = () => {
    clickHandler();
  };
  return (
    <QuestionDetialMenuBox>
      <MenuBox>
        <MenuSpan>Share</MenuSpan>
        <MenuSpan onClick={gotoEdit}>Edit</MenuSpan>
        <MenuSpan>Follow</MenuSpan>
      </MenuBox>
      <UserInfoBox>
        <UserSpanBox>
          <UserSpan>answered 9 mins ago</UserSpan>
        </UserSpanBox>
        <UserDetailImgBox>
          <UserImg src={User}></UserImg>
        </UserDetailImgBox>
        <UserDetailBox>
          <UserDetailSpan>{answer.name}</UserDetailSpan>
        </UserDetailBox>
      </UserInfoBox>
    </QuestionDetialMenuBox>
  );
};

AnswerDetailMenu.propTypes = {
  clickHandler: PropTypes.func,
  answer: PropTypes.object,
};
export default AnswerDetailMenu;
