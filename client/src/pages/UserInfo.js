import UserInfoHeader from '../components/UserInfoHeader';
import LeftNavBar from '../components/main/LeftNavBar';
import styled from 'styled-components';
import { MainBox } from './Home';

const UserInfoWrap = styled.div`
  display: flex;
`;
const UserInfo = () => {
  return (
    <>
      <LeftNavBar />
      <MainBox>
        <UserInfoWrap>
          <UserInfoHeader />
        </UserInfoWrap>
      </MainBox>
    </>
  );
};

export default UserInfo;
