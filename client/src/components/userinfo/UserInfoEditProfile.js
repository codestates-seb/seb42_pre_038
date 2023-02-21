import styled from 'styled-components';
import robotSample from '../../images/robotSample.png';
import { useState } from 'react';

const UserEditProfileLayout = styled.div`
  box-sizing: border-box;
  width: 844px;
`;

const UserEditProfileWrap = styled.div`
  font-size: 13px;
  text-align: left;
`;

const EditProfileTopTitle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  padding-bottom: 16px;

  h1 {
    font-weight: 400px;
    font-size: 27px;
    border-bottom: 1px solid #e3e6e8;
    width: 100%;
    padding-bottom: 20px;
  }
`;

const EditProfileFormSection = styled.form`
  font-size: 100%;
`;

const EditProfileFormTitle = styled.div`
  font-size: 21px;
  margin-bottom: 8px;
`;
const EditProfileFormBox = styled.div`
  border: 1px solid #e3e6e8;
  padding: 24px;
  border-radius: 6px;
`;
const ProfileImgBox = styled.div`
  display: block;
`;
const ProfileImgTitle = styled.div`
  font-size: 13px;
  border: none;
  h3 {
    width: 94px;
    height: 20px;
    font-weight: 600;
  }
`;
const ProfileImgContent = styled.div`
  img {
    width: 164px;
    height: 164px;
  }
`;

const ProfileDisplayNameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  label {
    width: 94px;
    height: 20px;
    font-weight: 600;
  }
  input {
    border: 1px solid #e3e6e8;
    border-radius: 5px;
    padding: 7.8px 9.1px;
    width: 421px;
    outline: none;
  }
`;
const ProfileEmailAddressBox = styled(ProfileDisplayNameBox)``;

const ProfileEmaillAddressInput = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-right: 6px;
  }
  display: flex;
  button {
    padding: 10.4px;
    margin: 0px;
    font-weight: 400;
    color: rgb(0, 166, 204);
    border: 1px solid rgb(55, 159, 239);
    background-color: white;
    border-radius: 5px;
    width: 49px;
    height: 33px;
    line-height: 5px;
    cursor: pointer;
  }
`;
const ProfileButtonBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  .color {
    border: 1px solid rgb(55, 159, 239);
    background: #0a95ff;
    color: #ffffff;
    margin-right: 10px;
  }
  button {
    padding: 10.4px;
    margin: 0px;
    font-weight: 400;
    color: rgb(0, 166, 204);
    border: none;
    background-color: white;
    border-radius: 5px;
    height: 38px;
    line-height: 5px;
    cursor: pointer;
  }
`;
const UserInfoEditProfile = () => {
  const [displayName, setDisplayName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  // const [errorEmailAddress, setErrorEmailAddress] = useState(false);

  // useEffect(() => {
  //   const regex =
  //     /^(([^<>()\\[\].,;:\s@"]+(\.[^<>()\\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  //   if (emailAddress.length > 0 && regex.test(emailAddress)) {
  //     setErrorEmailAddress(true);
  //   } else {
  //     setErrorEmailAddress(false);
  //   }
  // }, [emailAddress]);

  const handleButtonClick = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleCancle = () => {
    setDisplayName('');
    setEmailAddress('');
  };

  const handleSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <UserEditProfileLayout>
      <UserEditProfileWrap>
        <EditProfileTopTitle>
          <h1>Edit your profile</h1>
        </EditProfileTopTitle>
        <EditProfileFormSection>
          <EditProfileFormTitle>Public information</EditProfileFormTitle>
          <EditProfileFormBox onSubmit={handleSubmit}>
            <ProfileImgBox>
              <ProfileImgTitle>
                <h3>Profile image</h3>
              </ProfileImgTitle>
              <ProfileImgContent>
                <img src={robotSample} alt={'user.avater'} />
              </ProfileImgContent>
            </ProfileImgBox>
            <ProfileDisplayNameBox>
              <label htmlFor="displayName">Display name</label>
              <input
                name="DisplayName"
                id="displayName"
                value={displayName}
                placeholder="form: user.username"
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </ProfileDisplayNameBox>
            <ProfileEmailAddressBox>
              <label htmlFor="emailAddress">Email address</label>
              <ProfileEmaillAddressInput>
                <input
                  id="emailAddress"
                  value={emailAddress}
                  placeholder="form: user.userEmail"
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
                <button onClick={handleButtonClick}>Save</button>
              </ProfileEmaillAddressInput>
            </ProfileEmailAddressBox>
            <ProfileButtonBox>
              <button className="color" type="submit" onClick={handleSubmit}>
                Save profile
              </button>
              <button onClick={handleCancle}>Cancle</button>
            </ProfileButtonBox>
          </EditProfileFormBox>
        </EditProfileFormSection>
      </UserEditProfileWrap>
    </UserEditProfileLayout>
  );
};

export default UserInfoEditProfile;
