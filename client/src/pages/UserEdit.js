import UserInfoHeader from '../components/userinfo/UserInfoHeader';
import LeftNavBar from '../components/main/LeftNavBar';
import styled from 'styled-components';
import { ContainerBox, MainBox } from './Home';
import UserInfoLeftNav from '../components/userinfo/UserInfoLeftNav';
import UserInfoEditProfile from '../components/userinfo/UserInfoEditProfile';

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfoProfileBox = styled.div`
  display: flex;
`;

const UserEdit = () => {
  return (
    <ContainerBox>
      <LeftNavBar />
      <MainBox>
        <UserInfoWrap>
          <UserInfoHeader />
          <UserInfoProfileBox>
            <UserInfoLeftNav />
            <UserInfoEditProfile />
          </UserInfoProfileBox>
        </UserInfoWrap>
      </MainBox>
    </ContainerBox>
  );
};

export default UserEdit;
