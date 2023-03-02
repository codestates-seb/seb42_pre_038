import styled from 'styled-components';
// import robotSample from '../../images/robotSample.png';
import { useState, useEffect } from 'react';
import red_error from '../../images/red_question.svg';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
  li {
    width: 164px;
    height: 164px;
    background-color: #8aa4b5;
    font-weight: bold;
    font-size: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    pointer-events: none;
    color: white;
    justify-content: space-around;
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

const UserInfoProfileBox = styled.div``;

const CustomLi = styled.li`
  list-style-type: disc;
  margin-left: 30px;
  margin-bottom: 16.5px;
`;
const EditDeleteProfileBox = styled.div``;
const UserInfoEditProfile = ({ EditDelete }) => {
  const [displayName, setDisplayName] = useState('');
  const [errorDisplayName, setErrorDisplayName] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (displayName.length > 2) {
      setErrorDisplayName(false);
    } else {
      setErrorDisplayName(true);
    }
  }, [displayName]);

  const patchName = localStorage.getItem('name');
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

    const token = localStorage.getItem('token');
    const memberId = localStorage.getItem('memberId');
    // const userName = localStorage.getItem('name');
    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };
    const data = {
      name: displayName,
    };

    return axios
      .patch(`${URI}/api/members/${memberId}`, data, header)
      .then((res) => {
        console.log(res.data.data.name);
        localStorage.setItem('name', res.data.data.name);
        window.location.reload();
      })
      .catch(() => {
        window.alert('다시 입력해주세요!');
        setDisplayName('');
        setErrorDisplayName(false);
      });
  };
  // delete button area
  // eslint-disable-next-line no-undef
  const URI = process.env.REACT_APP_SERVER_URI;
  const token = localStorage.getItem('Authorization');
  const memberId = localStorage.getItem('memberId');

  const userDelete = (e) => {
    e.preventDefault();
    console.log(token);
    console.log(memberId);
    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    };

    return axios.delete(`${URI}/api/members/${memberId}`, header).then(() => {
      localStorage.clear();
      alert('정상적으로 탈퇴되셨습니다');
      navigate('/');
    });
  };
  //! check !//
  return (
    <EditDeleteProfileBox>
      {EditDelete === 'EditProfile' ? (
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
                    <img
                      src={`https://api.dicebear.com/5.x/identicon/svg?seed=${memberId}`}
                      alt="장은수's user avatar"
                      width="128"
                      height="128"
                    />
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
                      errorDisplayName && displayName.length > 0
                        ? 'error'
                        : null
                    }
                    id="displayName"
                    value={displayName}
                    placeholder={patchName}
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
      ) : null}
      {EditDelete === 'DeleteProfile' ? (
        <UserInfoProfileBox>
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
                  any of your original content, should this deletion be carried
                  out and you change your mind later on.
                </CustomLi>
                <CustomLi>
                  Your questions and answers will remain on the site, but will
                  be disassociated and anonymized (the author will be listed as
                  &quot;user21216624) and will not indicate your authorship even
                  if you later return to the site.
                </CustomLi>
              </ul>
              <p></p>

              <p>
                Confirming deletion will only delete your profile on Stack
                Overflow - it will not affect any of your other profiles on the
                Stack Exchange network. If you want to delete multiple profiles,
                you&apos;ll need to visit each site separately and request
                deletion of those individual profiles.
              </p>

              <form className="js-delete-form">
                <button
                  className="s-btn s-btn__filled s-btn__danger js-delete-button"
                  disabled=""
                  onClick={userDelete}
                >
                  Delete profile
                </button>
              </form>
            </div>
          </div>
        </UserInfoProfileBox>
      ) : null}
    </EditDeleteProfileBox>
  );
};

UserInfoEditProfile.propTypes = {
  EditDelete: PropTypes.node.isRequired,
  // setEditDelete: PropTypes.node.isRequired,
};
export default UserInfoEditProfile;
