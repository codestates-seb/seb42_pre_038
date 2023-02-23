import styled from 'styled-components';
import robotSample from '../../images/robotSample.png';
import { useState, useEffect } from 'react';
import red_error from '../../images/red_question.svg';
import axios from 'axios';
// import { display } from '@mui/system';

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
const EditProfileDivBox = styled.div`
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
  position: relative;
  flex-direction: column;
  margin-top: 10px;
  img {
    position: absolute;
    right: 49%;
    top: 51%;
  }
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
    &.error {
      border: 1px solid rgb(222, 79, 84);
    }
  }
`;

const ProfileButtonBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  button:disabled {
    background-color: #c0d7fc;
    color: black;
    font-weight: 1000;
    border: none;
  }
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
  const [errorDisplayName, setErrorDisplayName] = useState(false);

  useEffect(() => {
    if (displayName.length > 2) {
      setErrorDisplayName(false);
    } else {
      setErrorDisplayName(true);
    }
  }, [displayName]);

  const handleChange = (e) => {
    setDisplayName(e.target.value);
  };
  const handleCancle = () => {
    setDisplayName('');
    setErrorDisplayName(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!displayName) {
      setDisplayName('');
      setErrorDisplayName(false);
      return;
    }
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = {
      name: displayName,
    };

    return axios
      .patch('http://13.124.65.30:8080/api/members/1', data, header)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.headers));

        // window.location.reload();
      })
      .catch(() => {
        window.alert('다시 입력해주세요!');
        setDisplayName('');
        setErrorDisplayName(false);
      });
  };
  //! check !//
  return (
    <UserEditProfileLayout>
      <UserEditProfileWrap>
        <EditProfileTopTitle>
          <h1>Edit your profile</h1>
        </EditProfileTopTitle>
        <EditProfileFormSection>
          <EditProfileFormTitle>Public information</EditProfileFormTitle>
          <EditProfileDivBox>
            <ProfileImgBox>
              <ProfileImgTitle>
                <h3>Profile image</h3>
              </ProfileImgTitle>
              <ProfileImgContent>
                <img src={robotSample} alt={'user.avater'} />
              </ProfileImgContent>
            </ProfileImgBox>
            <ProfileDisplayNameBox>
              {errorDisplayName && displayName.length > 0 ? (
                <img src={red_error} alt="red_error" />
              ) : null}
              <label htmlFor="displayName">Display name</label>
              <input
                name="DisplayName"
                className={
                  errorDisplayName && displayName.length > 0 ? 'error' : null
                }
                id="displayName"
                value={displayName}
                placeholder="장은수"
                onChange={(e) => handleChange(e)}
              />
            </ProfileDisplayNameBox>
            <ProfileButtonBox>
              <button
                className="color"
                type="submit"
                disabled={!displayName}
                onClick={handleSubmit}
              >
                Save profile
              </button>
              <button onClick={handleCancle}>Cancle</button>
            </ProfileButtonBox>
          </EditProfileDivBox>
        </EditProfileFormSection>
      </UserEditProfileWrap>
    </UserEditProfileLayout>
  );
};

export default UserInfoEditProfile;
