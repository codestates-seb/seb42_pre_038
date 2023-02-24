/* eslint-disable react/no-unescaped-entities */
import UserInfoHeader from '../components/userinfo/UserInfoHeader';
import LeftNavBar from '../components/main/LeftNavBar';
import styled from 'styled-components';
import { ContainerBox, MainBox } from './Home';
import UserInfoLeftNav from '../components/userinfo/UserInfoLeftNav';

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfoProfileBox = styled.div`
  display: flex;
`;

const CustomLi = styled.li`
  list-style-type: disc;
  margin-left: 30px;
  margin-bottom: 16.5px;
`;

const UserDelte = () => {
  return (
    <ContainerBox>
      <LeftNavBar />
      <MainBox>
        <UserInfoWrap>
          <UserInfoHeader />
          <UserInfoProfileBox>
            <UserInfoLeftNav />
            <div
              id="mainbar"
              className="flex--item fl-grow1 user-show-new settings-page"
              style={{ height: 'auto' }}
            >
              <div className="s-page-title mb24">
                <h1 className="s-page-title--header m0 baw0 p0">
                  Delete Profile
                </h1>
              </div>
              <div className="s-prose">
                <p>
                  Before confirming that you would like your profile deleted,
                  we&apos;d like to take a moment to explain the implications of
                  deletion:
                </p>
                <ul>
                  <CustomLi>
                    Deletion is irreversible, and you will have no way to regain
                    any of your original content, should this deletion be
                    carried out and you change your mind later on.
                  </CustomLi>
                  <CustomLi>
                    Your questions and answers will remain on the site, but will
                    be disassociated and anonymized (the author will be listed
                    as "user21216624") and will not indicate your authorship
                    even if you later return to the site.
                  </CustomLi>
                </ul>
                <p></p>

                <p>
                  Confirming deletion will only delete your profile on Stack
                  Overflow - it will not affect any of your other profiles on
                  the Stack Exchange network. If you want to delete multiple
                  profiles, you'll need to visit each site separately and
                  request deletion of those individual profiles.
                </p>

                <form
                  className="js-delete-form"
                  action="/users/delete/21216624/submit"
                  method="post"
                >
                  <button
                    className="s-btn s-btn__filled s-btn__danger js-delete-button"
                    disabled=""
                  >
                    Delete profile
                  </button>
                </form>
              </div>
            </div>
          </UserInfoProfileBox>
        </UserInfoWrap>
      </MainBox>
    </ContainerBox>
  );
};

export default UserDelte;
