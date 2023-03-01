import UserInfoHeader from '../components/userinfo/UserInfoHeader';
import LeftNavBar from '../components/main/LeftNavBar';
import styled from 'styled-components';
import { ContainerBox } from './Home';
import { useState, useEffect } from 'react';
import UserInfoLeftNav from '../components/userinfo/UserInfoLeftNav';
import UserInfoEditProfile from '../components/userinfo/UserInfoEditProfile';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import UserProfileList from '../components/userinfo/UserProfileList';
import axios from 'axios';

const UserInfoWrap = styled.div`
  max-width: 1100px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const UserInfoBody = styled.div`
  display: flex;
`;

const UserStats = styled.div`
  display: flex;
  flex-direction: column;
  > h1 {
    font-weight: 400;
    font-size: 21px;
    margin-bottom: 8px;
  }
  > div {
    width: 244.75px;
    height: 70.45px;
    margin-right: 22px;
  }
`;

const UserInfoProfileBox = styled.div`
  display: flex;
`;

const UserInfo = () => {
  const [userHeaderTap, setUserHeaderTap] = useState('userinfo');
  const [EditDelete, setEditDelete] = useState('EditProfile');

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  // eslint-disable-next-line no-undef
  const URI = process.env.REACT_APP_SERVER_URI;
  const memberId = localStorage.getItem('memberId');
  const header = {
    headers: {
      Authorization: token,
    },
  };

  const [isUserContents, setIsUserContents] = useState([]);
  const [isUserAnswers, setIsUserAnswers] = useState([]);
  useEffect(() => {
    // 유저 프로필 퀘스천 요청
    axios
      .get(`${URI}/api/questions/profile/${memberId}`, header)
      .then((res) => {
        console.log(res);
        setIsUserContents(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.status);
        if (error.response.status === 401) {
          localStorage.clear();
          navigate('/login');
        }
      });

    // 유저 프로필 앤써 요청
    axios
      .get(`${URI}/api/answers/profile/${memberId}`, header)
      .then((res) => setIsUserAnswers(res.data.data))
      .catch((error) => {
        console.log(error);
        console.log(error.response.status);
        if (error.response.status === 401) {
          localStorage.clear();
          navigate('/login');
        }
      });
  }, []);

  const { id } = useParams();
  console.log(id);
  return (
    <ContainerBox>
      <LeftNavBar />
      <UserInfoWrap>
        <UserInfoHeader
          userHeaderTap={userHeaderTap}
          setUserHeaderTap={setUserHeaderTap}
          setEditDelete={setEditDelete}
        />
        {userHeaderTap === 'userinfo' ? (
          <UserInfoBody>
            <UserStats>
              <h1>Stats</h1>
              <div className="s-card fc-light bar-md">
                <div className="d-flex flex__allitems6 gs16 fw-wrap md:jc-space-between">
                  <div className="flex--item md:fl-auto">
                    <div className="fs-body3 fc-dark">1</div>
                    qeustions
                  </div>
                  <div className="flex--item md:fl-auto">
                    <div className="fs-body3 fc-dark">0</div>
                    answers
                  </div>
                </div>
              </div>
            </UserStats>
            <div className="flex--item fl-grow1">
              <div className="d-grid g24">
                <div data-can-be="stats" data-is-here-when="sm md"></div>
                <div className="grid--item">
                  <div className="fs-title mb8">Questions</div>
                  <div className="s-empty-state p24 bar-md ba bc-black-075 ta-center">
                    <p className="mx-auto wmx3 mb0"></p>
                    <UserProfileList isUserContents={isUserContents} />
                  </div>
                </div>

                <div className="grid--item">
                  <div className="d-flex ai-center jc-space-between mb8">
                    <div className="flex--item fs-title">Answers</div>
                  </div>
                  <div className="s-empty-state p24 bar-md ba bc-black-075 ta-center">
                    <p className="mx-auto wmx3 mb0"></p>
                    <UserProfileList isUserAnswers={isUserAnswers} />
                  </div>
                </div>
              </div>
            </div>
          </UserInfoBody>
        ) : null}
        {userHeaderTap === 'setting' ? (
          <UserInfoProfileBox>
            <UserInfoLeftNav
              EditDelete={EditDelete}
              setEditDelete={setEditDelete}
            />
            <UserInfoEditProfile EditDelete={EditDelete} />
          </UserInfoProfileBox>
        ) : null}
      </UserInfoWrap>
    </ContainerBox>
  );
};

UserInfoLeftNav.propTypes = {
  EditDelete: PropTypes.node.isRequired,
  setEditDelete: PropTypes.node.isRequired,
};
export default UserInfo;
