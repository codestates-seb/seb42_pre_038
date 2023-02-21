//! EmailInput , PasswordInput 박스에서 input 포커싱 해제 문제 발생 !//
//* 회원가입 페이지 *//

import styled from 'styled-components';
import signup1 from '../images/signup1.svg';
import signup2 from '../images/signup2.svg';
// import { Navigate } from 'react-router-dom';
import signup3 from '../images/signup3.svg';
import signup4 from '../images/signup4.svg';
import { Link, useNavigate } from 'react-router-dom';
import google_logo from '../images/google_logo.svg';
import github_logo from '../images/github_logo.svg';
import facebook_logo from '../images/facebook_logo.svg';
import signup_question from '../images/signup_question.svg';
import footer_link from '../images/footer_link.svg';
import { useEffect, useState } from 'react';
import red_error from '../images/red_question.svg';
import robotSample from '../images/robotSample.png';
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
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    margin-left: 150px;
    padding-top: 20px;
  }
`;
const SignupLeftBox = styled.div`
  /* display: flex; */
  width: 418px;
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
  width: 315px;
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
  width: 315px;
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
  width: 315px;
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
  width: 315px;
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
`;

const DisplayNameLabel = styled.label`
  font-weight: 600;
  font-size: 15px;
`;
const DisplayNameInput = styled.input`
  width: 268px;
  height: 31px;
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 5px;
  outline: none;
`;

const EmailInput = styled.div`
  display: flex;
  flex-direction: column;
  position: ${(props) => props.error && 'relative'};
  input {
    width: 268px;
    height: 31px;
    border: ${(props) =>
      props.error
        ? '1px solid rgb(222, 79, 84)'
        : '1px solid hsl(210deg 8% 75%)'};
    width: ${(props) => props.error && '100%'};
    border-radius: 5px;
    outline: none;
  }

  img {
    margin-right: ${(props) => props.error && '10px'};
    position: ${(props) => props.error && 'absolute'};
    right: ${(props) => props.error && '0'};
    margin-top: ${(props) => props.error && '9px'};
  }
  div {
    color: ${(props) => props.error && 'rgb(185, 1, 1)'};
    font-size: ${(props) => props.error && '12px'};
  }
`;

const EmailInputLabel = styled.label`
  font-weight: 600;
  font-size: 15px;
`;

const PasswordInput = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-weight: 600;
    font-size: 15px;
  }
  input {
    width: 268px;
    height: 31px;
    border-radius: 5px;
    outline: none;
  }
  p {
    color: rgb(106, 115, 124);
    text-align: left;
    font-size: 12px;
  }
`;

const RobotCheckDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(241, 242, 243);
  color: rgb(35, 38, 41);
  font-size: 13px;
`;

const RobotCheckdiv = styled.div`
  margin: auto;
  margin-top: 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0;
  width: 156px;
  height: 136px;
  color: rgb(0, 0, 0);
  text-align: center;

  img {
    width: 150px;
    cursor: pointer;
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
  const [displayName, setDisplayName] = useState('');
  //* 이메일(에러메시지 및 유효성) *//
  const [loginEmail, setLoginEmail] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState(false);
  const [loginEmailValid, setLoginEmailValid] = useState(false);
  //* 패스워드(에러메시지 및 유효성) *//
  const [loginPassword, setLoginPassword] = useState('');
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(false);
  const [loginPasswordLegnthValid, setLoginPasswordLegnthValid] =
    useState(false);
  const [loginPasswordRegexValid, setLoginPasswordRegexValid] = useState(false);

  const navigate = useNavigate();

  //* 이메일, 패스워드 유효성 검사 *//
  useEffect(() => {
    const regex1 =
      /^(([^<>()\\[\].,;:\s@"]+(\.[^<>()\\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (loginEmail.length > 0 && regex1.test(loginEmail)) {
      setErrorEmailMessage(true);
      setLoginEmailValid(true);
    } else {
      setErrorEmailMessage(false);
      setLoginEmailValid(false);
    }
  }, [loginEmail]);

  useEffect(() => {
    const regex2 =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex2.test(loginPassword)) {
      setErrorPasswordMessage(true);
      setLoginPasswordRegexValid(true);
    } else {
      setErrorPasswordMessage(false);
      setLoginPasswordRegexValid(false);
    }
  }, [loginPassword]);

  useEffect(() => {
    if (loginPassword.length > 8 && loginPassword.length < 20) {
      setLoginPasswordLegnthValid(true);
    } else {
      setLoginPasswordLegnthValid(false);
    }
  }, [loginPassword]);

  //* 회원가입 버튼 유효성 검사 후 *//
  //* Ajax function (Axios), Sign up버튼 활성화시 post 요청 *//
  //! test 1 !//
  const signupOnClickHandler = (e) => {
    e.preventDefault();
    const data = {
      username: displayName,
      email: loginEmail,
      password: loginPassword,
    };
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };
    if (
      loginEmailValid &&
      loginPasswordLegnthValid &&
      loginPasswordRegexValid
    ) {
      try {
        axios.post('', JSON.stringify(data), { headers }).then((res) => {
          window.alert(`${res.data.username}님 환영합니다.`);
          navigate('/login');
        });
      } catch (err) {
        console.log(err);
        navigate('#');
      }
    } else {
      window.alert('주어진 양식에 맞춰 회원가입을 완료해주세요.');
    }
  };

  //! test 2 !//
  // const signupOnClickHandler = () => {
  //   e.preventDefault();
  //   const data = {
  //     username: displayName,
  //     email: userEmail,
  //     password: usePassword,
  //   };

  //   const headers = {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //   };

  //   axios
  //     .post('', JSON.stringify(data), { headers })
  //     .then((res) => {
  //       window.alert('회원가입이 완료되었습니다!');
  //       navigate('/login');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  //! EmailInput , PasswordInput 박스에서 input 포커싱 해제 문제 발생 !//
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
            <SignupForm onSubmit={(e) => signupOnClickHandler(e)}>
              <NameInput>
                <DisplayNameLabel htmlFor="displayNameInput">
                  Display Name
                </DisplayNameLabel>
                <DisplayNameInput
                  id="displayNameInput"
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                  value={displayName}
                ></DisplayNameInput>
              </NameInput>
              {/* 이메일 박스. 에러메세지 여부에 따라 빨간색 테두리 및 아이콘 생성(삼항연산자로 분기) */}
              <EmailInput error={!errorEmailMessage && loginEmail.length > 0}>
                <EmailInputLabel htmlFor="email">Email</EmailInputLabel>
                {!errorEmailMessage && loginEmail.length > 0 ? (
                  <EmailInput
                    error={!errorEmailMessage && loginEmail.length > 0}
                  >
                    <img src={red_error} alt="red_error" />
                    <input
                      id="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    ></input>
                    <div>Email must have valid email form.</div>
                  </EmailInput>
                ) : (
                  <input
                    id="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  ></input>
                )}
              </EmailInput>
              {/* 패스워드 박스. 에러메세지 여부에 따라 빨간색 테두리, 아이콘, 로봇 박스 지워지고 추가 텍스트 생성(삼항 연산자로 분기) */}
              <PasswordInput>
                <label htmlFor="password">Password</label>

                {!errorPasswordMessage && loginPassword.length > 0 ? (
                  <>
                    <PasswordInput
                      style={{
                        position: 'relative',
                      }}
                    >
                      <img
                        src={red_error}
                        style={{
                          marginRight: '10px',
                          position: 'absolute',
                          right: 0,
                          marginTop: '12px',
                        }}
                        alt="red_error"
                      />
                      <input
                        style={{
                          border: '1px solid rgb(222,79,84)',
                          width: '100%',
                        }}
                        id="password"
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      ></input>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          color: 'rgb(185, 1, 1)',
                          font: '12px',
                        }}
                      >
                        Password must follow valid rules.
                        <ul
                          style={{
                            padding: '20px',
                          }}
                        >
                          <li
                            style={{
                              marginTop: '5px',
                            }}
                          >
                            Password must be 8 ~ 20 characters.
                          </li>
                          <li
                            style={{
                              marginTop: '5px',
                            }}
                          >
                            Password must have one or more number and character
                          </li>
                          <li
                            style={{
                              marginTop: '5px',
                            }}
                          >
                            cannot use special characters other than !@#$%^&*
                          </li>
                        </ul>
                      </div>
                      <RobotCheckDiv
                        style={{
                          display: 'none',
                        }}
                      >
                        <RobotCheckdiv>
                          <img src={robotSample} alt="" />
                        </RobotCheckdiv>
                      </RobotCheckDiv>
                    </PasswordInput>
                  </>
                ) : (
                  <>
                    <input
                      id="password"
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    ></input>
                    <RobotCheckDiv>
                      <RobotCheckdiv>
                        <img src={robotSample} alt="" />
                      </RobotCheckdiv>
                    </RobotCheckDiv>
                  </>
                )}

                <p>
                  Passwords must contain at least eight characters, including at
                  least 1 letter and 1 number.
                </p>
              </PasswordInput>

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
              <SubmitBoxButton onClick={(e) => signupOnClickHandler(e)}>
                <Link to="#">Sign up</Link>
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
