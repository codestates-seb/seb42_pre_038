//* 회원가입 페이지 *//

import styled from 'styled-components';
import signup1 from '../images/signup1.svg';
import signup2 from '../images/signup2.svg';
import { Link, useNavigate } from 'react-router-dom';
import signup3 from '../images/signup3.svg';
import signup4 from '../images/signup4.svg';
import google_logo from '../images/google_logo.svg';
import github_logo from '../images/github_logo.svg';
import facebook_logo from '../images/facebook_logo.svg';
import signup_question from '../images/signup_question.svg';
import footer_link from '../images/footer_link.svg';
import { useEffect, useState } from 'react';
import red_error from '../images/red_question.svg';
import axios from 'axios';

const SignupLayout = styled.div`
  background-color: rgb(241, 242, 243);
  min-height: 100vh;
`;

const SignupWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 782px;
  height: 100vh;
  margin: auto;
  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    margin-left: 150px;
    padding-top: 20px;
  }
`;
const SignupLeftBox = styled.div`
  width: 100%;
  height: 284px;
  font-size: 13px;
  margin-right: 48px;
  margin-bottom: 12px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const SignupList = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 24px;
  div {
    margin-left: 7px;
    font-size: 15px;
  }
`;
const H1 = styled.h1`
  color: black;
  font-size: 27px;
  width: 100%;
  margin-bottom: 32px;
`;
const LinkBox = styled.div`
  display: block;
  text-align: left;
  margin-bottom: 24px;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  color: rgb(10, 149, 255);
`;
const SignupRightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  height: 915px;
  font-size: 13px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 50px;
`;

const GoggleButton = styled.button`
  padding: 10px;
  width: 100%;
  height: 37px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 5px;
  border: none;
  background-color: white;
  font-size: 13px;
  cursor: pointer;
  border: 1px solid rgb(214, 217, 220);

  svg {
    margin-top: -3.9px;
    margin-bottom: -3.9px;
    margin-right: 1.5px;
  }

  img {
    margin-right: 5px;
  }
`;
const GitHubButton = styled.button`
  background-color: rgba(47, 51, 55);
  border-radius: rgb(214, 217, 220);
  color: white;
  width: 100%;
  height: 37px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 5px;
  cursor: pointer;

  img {
    margin-right: 5px;
  }
`;
const FacebookButton = styled.button`
  background-color: rgba(56, 84, 153);
  border: none;
  color: white;
  width: 100%;
  height: 37px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 5px;
  cursor: pointer;
  img {
    margin-right: 5px;
  }
`;

const SignupFormSubmitBox = styled.div`
  display: flex;
  width: 100%;
  height: 670px;
  background-color: rgb(255, 255, 255);
  text-align: left;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
    rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
`;

const SignupForm = styled.form`
  margin: auto;
  width: 268px;
  height: 539px;
`;

const NameInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    position: absolute;
    right: 4%;
    top: 51%;
  }
`;

const DisplayNameLabel = styled.label`
  font-weight: 600;
  font-size: 15px;
`;
const DisplayNameInput = styled.input`
  width: 100%;
  padding-left: 5px;
  height: 31px;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid rgb(186, 191, 196);
  outline: none;
  &.error {
    border: 1px solid rgb(222, 79, 84) !important;
  }
`;

const EmailInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 5px;
  input {
    width: 100%;
    height: 31px;
    border: 1px solid rgb(200, 204, 208);
    padding-left: 10px;
    &.error {
      border: 1px solid rgb(222, 79, 84);
    }
    border-radius: 5px;
    outline: none;
    padding-right: 5px;
  }
  label {
    font-weight: 600;
    font-size: 15px;
  }

  img {
    margin-right: 10px;
    position: absolute;
    right: 0.1%;
    top: 40%;
  }
  div {
    color: rgb(185, 1, 1);
    font-size: 12px;
    display: none;
    &.visible {
      display: block;
    }
  }
`;

const PasswordInputBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  input {
    width: 100%;
    height: 31px;
    border: 1px solid rgb(200, 204, 208);
    &.boder {
      border: 1px solid red !important;
    }
    border-radius: 5px;
    padding-right: 5px;
  }
  img {
    margin-right: 10px;
    position: absolute;
    right: 0.1%;
    top: 25%;
  }
  label {
    font-weight: 600;
    font-size: 15px;
  }
  div {
    display: flex;
    flex-direction: column;
    color: rgb(185, 1, 1);
    font-size: 12px;
    display: none;
    &.error {
      display: block;
    }
  }
`;

const ExplainCheckList = styled.div`
  display: flex;
  margin-top: 13px;
  width: 268px;
  height: 53px;
`;

const SubmitBoxButton = styled.button`
  width: 268px;
  height: 41px;
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
  border: none;
  font-weight: 400;
  color: rgb(255, 255, 255);
  background-color: rgb(10, 149, 255);
  cursor: pointer;
`;
const ExplainFooter = styled.div`
  color: rgb(106, 115, 124);
  font-size: 12px;
  text-align: left;
  margin-top: 20px;
`;

const TagLink = styled(Link)`
  color: rgb(0, 116, 204);
  text-decoration-color: rgb(0, 116, 204);
`;

const FooterBox = styled.div`
  width: 316px;
  height: 78px;
  margin-top: 10px;

  img {
    margin-left: 8px;
    margin-top: 2px;
  }
`;

const handleButtonClick = () => {
  alert('hi');
};

const Signup = () => {
  const [displayName, setDisplayName] = useState('장은수');
  const [displayNameValid, setDisplayNameValid] = useState(false);
  //* 이메일(에러메시지 및 유효성) *//
  const [userEmail, setUserEmail] = useState('');
  const [userEmailValid, setUserEmailValid] = useState(false);
  //* 패스워드(에러메시지 및 유효성) *//
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordValid, setUserPasswordValid] = useState(false);

  const navigate = useNavigate();
  //* 이메일 유효성 검사 *//
  useEffect(() => {
    if (displayName.length > 2) {
      setDisplayNameValid(true);
    } else {
      setDisplayNameValid(false);
    }
  }, [displayName]);

  //* 이메일, 패스워드 유효성 검사 *//
  useEffect(() => {
    const regex1 =
      /^(([^<>()\\[\].,;:\s@"]+(\.[^<>()\\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (userEmail.length > 0 && regex1.test(userEmail)) {
      setUserEmailValid(true);
    } else {
      setUserEmailValid(false);
    }
  }, [userEmail]);

  useEffect(() => {
    const regex2 =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (userPassword.length > 0 && regex2.test(userPassword)) {
      setUserPasswordValid(true);
    } else {
      setUserPasswordValid(false);
    }
  }, [userPassword]);

  //* 회원가입 버튼 유효성 검사 후 *//
  //* Ajax function (Axios), Sign up버튼 활성화시 post 요청 *//
  //! test 1 !//

  const signupOnClickHandler = (e) => {
    e.preventDefault();
    const data = {
      email: userEmail,
      password: userPassword,
      name: displayName,
    };
    const header = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };
    // eslint-disable-next-line no-undef
    const URI = process.env.REACT_APP_SERVER_URI;
    const axiosInstance = axios.create({
      baseURL: `${URI}`,
      debug: true, // 디버깅 모드 활성화
    });
    if (userEmailValid && displayNameValid && userPasswordValid) {
      axiosInstance
        .post('/api/members', data, header)
        .then((res) => {
          window.alert(`${res.data.name}님 환영합니다.`);
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
          window.alert('주어진 양식에 맞춰 회원가입을 완료해주세요.');
          navigate('/login');
        });
    }
  };

  return (
    <SignupLayout>
      <SignupWrap>
        <SignupLeftBox>
          <H1>Join the Stack Overflow community</H1>
          <SignupList>
            <img src={signup1} alt="" />
            <div>Get unstuck — ask a question</div>
          </SignupList>
          <SignupList>
            <img src={signup2} alt="" />
            <div>Unlock new privileges like voting and commenting</div>
          </SignupList>
          <SignupList>
            <img src={signup3} alt="" />
            <div>Save your favorite tags, filters, and jobs</div>
          </SignupList>
          <SignupList>
            <img src={signup4} alt="" />
            <div>Earn reputation and badges</div>
          </SignupList>
          <LinkBox>
            <p>
              Collaborate and share knowledge with a private group for FREE.
            </p>
            <StyledLink to="#">
              Get Stack Overflow for Teams free for up to 50 users.
            </StyledLink>
          </LinkBox>
        </SignupLeftBox>
        <SignupRightBox>
          <ButtonBox>
            <GoggleButton onClick={() => handleButtonClick}>
              <img src={google_logo} alt="google_logo" />
              Log in with Google
            </GoggleButton>
            <GitHubButton onClick={() => handleButtonClick}>
              <img src={github_logo} alt="github_logo" />
              Log in with GitHub
            </GitHubButton>
            <FacebookButton onClick={handleButtonClick}>
              <img
                src={facebook_logo}
                alt="facebook_logo"
                style={{ marginLeft: '5px' }}
              />
              Log in with Facebook
            </FacebookButton>
          </ButtonBox>
          <SignupFormSubmitBox>
            <SignupForm>
              <NameInput>
                {!displayNameValid && displayName.length > 0 ? (
                  <img src={red_error} alt="red_error" />
                ) : null}
                <DisplayNameLabel htmlFor="displayNameInput">
                  Display Name
                </DisplayNameLabel>
                <DisplayNameInput
                  id="displayNameInput"
                  className={
                    !displayNameValid && displayName.length > 0 ? 'error' : null
                  }
                  type="text"
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                  value={displayName}
                ></DisplayNameInput>
              </NameInput>
              {/* 이메일 박스. 에러메세지 여부에 따라 빨간색 테두리 및 아이콘 생성(삼항연산자로 분기) */}
              <EmailInput>
                {!userEmailValid && userEmail.length > 0 ? (
                  <img src={red_error} alt="red_error" />
                ) : null}
                <label htmlFor="email">Email</label>
                <input
                  className={!userEmailValid && userEmail.length > 0 && 'error'}
                  id="email"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                ></input>
                <div
                  className={
                    !userEmailValid && userEmail.length > 0 && 'visible'
                  }
                >
                  Email must have valid email form.
                </div>
              </EmailInput>
              {/* 패스워드 박스. 에러메세지 여부에 따라 빨간색 테두리, 아이콘, 로봇 박스 지워지고 추가 텍스트 생성(삼항 연산자로 분기) */}
              <PasswordInputBox>
                {!userPasswordValid && userPassword.length > 0 ? (
                  <img src={red_error} alt="red_error" />
                ) : null}
                <label htmlFor="passwords">Password</label>
                <input
                  id="passwords"
                  type="password"
                  name="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                  className={
                    !userPasswordValid && userPassword.length > 0 && 'boder'
                  }
                ></input>
                <div
                  className={
                    !userPasswordValid && userPassword.length > 0 && 'error'
                  }
                >
                  Password must have valid email form.
                </div>
                <p>
                  Passwords must contain at least eight characters, including at
                  least 1 letter and 1 number.
                </p>
              </PasswordInputBox>
              <ExplainCheckList>
                <div>
                  <input type="checkbox" name="EmailOption" id="opt-in" />
                </div>
                <div>
                  <label htmlFor="opt-in">
                    Opt-in to receive occasional product updates, user research
                    invitations, company announcements, and digests.
                  </label>
                </div>
                <div>
                  <Link to="#">
                    <img src={signup_question} alt="" />
                  </Link>
                </div>
              </ExplainCheckList>
              <SubmitBoxButton
                type="submit"
                onClick={(e) => signupOnClickHandler(e)}
              >
                Sign up
              </SubmitBoxButton>
              <ExplainFooter>
                By clicking “Sign up”, you agree to our{' '}
                <TagLink to="#">
                  terms of service, privacy policy and cookie policy
                </TagLink>
                <TagLink to="#">privacy policy</TagLink>
                and
                <TagLink to="#">cookie policy</TagLink>
              </ExplainFooter>
            </SignupForm>
          </SignupFormSubmitBox>
          <FooterBox>
            Already have an account?
            <TagLink to="/"> Log In </TagLink>
            <br />
            Are you an employer?
            <TagLink to="/"> Sign up on Talent</TagLink>
            <img src={footer_link} alt="" />
          </FooterBox>
        </SignupRightBox>
      </SignupWrap>
    </SignupLayout>
  );
};

export default Signup;
