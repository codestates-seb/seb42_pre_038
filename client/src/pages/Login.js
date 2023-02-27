//* 로그인 페이지 *//
import styled from 'styled-components';
import stack_logo from '../images/stack_logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import google_logo from '../images/google_logo.svg';
import github_logo from '../images/github_logo.svg';
import facebook_logo from '../images/facebook_logo.svg';
import red_error from '../images/red_question.svg';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions';

const StyledLink = styled(Link).attrs()`
  color: rgba(0, 116, 204);
  font-size: 12px;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: #f1f2f3;
`;

const LoginBox = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 278px;
  height: 714px;
  /* line-height: 722px; */
`;

const Logo = styled.div`
  margin-bottom: 24px;
  img {
    margin: auto;
    display: block;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const GoggleButton = styled.button`
  padding: 10px;
  width: 277px;
  height: 37px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 5px;
  border: none;
  background-color: white;
  font-size: 13px;
  cursor: pointer;

  svg {
    margin-top: -3.9px;
    margin-bottom: -3.9px;
    margin-right: 1.5px;
  }
`;
const GitHubButton = styled.button`
  background-color: rgba(47, 51, 55);
  color: white;
  width: 277px;
  height: 37px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 5px;
  cursor: pointer;
`;
const FacebookButton = styled.button`
  background-color: rgba(56, 84, 153);
  border: none;
  color: white;
  width: 277px;
  height: 37px;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 5px;
  cursor: pointer;
`;

const FormSubmitWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 270px;
  height: 241px;
  padding: 24px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
    rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  margin-bottom: 24px;
`;

const FormSubmitBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 230px;
  height: 60px;
  margin-top: 6px;
  margin-bottom: 6px;
  label {
    color: rgba(12, 13, 14);
    font-size: 15px;
    font-weight: bold;
  }
  input {
    height: 30px;
  }

  p {
    color: #d0393e;
  }
`;
const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  height: 60px;
  margin-top: 6px;
  margin-bottom: 6px;
  label {
    color: rgba(12, 13, 14);
    font-size: 15px;
    font-weight: bold;
  }
`;
const PasswordSearchBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginSubmitButton = styled.button`
  width: 230px;
  height: 37px;
  margin-top: 6px;
  margin-bottom: 6px;
  background-color: rgba(10, 149, 255);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 13px;
  cursor: pointer;
  :hover {
    color: #000000;
    font-weight: 400;
    background-color: #3f88fc;
  }
`;

const SignUpMoveBox = styled.div`
  width: 270px;
  height: 78px;
  padding: 16px;
  text-align: center;
  font-size: 13px;
  color: rgba(35, 38, 41);
`;
const SignUpOnTalentBox = styled.div`
  color: rgba(35, 38, 41);
  width: 270px;
  font-size: 13px;
  padding: 0px;
  margin-top: 12px;
  text-align: center;
`;
const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  img {
    margin-right: 10px;
    position: absolute;
    right: 0;
  }
`;

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errormessage, setErrorMessage] = useState(false);

  // const [isToken, setIsToken] = useState(null);

  // useEffect(() => {
  //   test();
  // }, [isToken]);

  // const header = {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //     Authorization: isToken,
  //   },
  // };
  // const test = () => {
  //   return axios
  //     .get(`${URI}/api/auth/reissue`, header, { withCredentials: true })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Login.js eslint 미적용(.env 에러); //
  // eslint-disable-next-line no-undef
  const URI = process.env.REACT_APP_SERVER_URI;
  //! 서버 배포 후 테스트 이메일, 패스워드 post 요청 후 토큰 받아와서 저장 !//
  // Ajax function (Axios)
  //* 유효성 검사 *//
  const handleSubmitButton = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = false;

    if (!loginEmail || !loginPassword) {
      setLoginPassword('');
      setLoginEmail('');
      window.alert('다시 입력해주세요 !');
      setErrorMessage(!errormessage);
      return;
    } else if (!loginEmail.includes('@')) {
      setLoginPassword('');
      setLoginEmail('');
      window.alert('다시 입력해주세요 !');
      setErrorMessage(!errormessage);
      return;
    }

    // const header = {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //   },
    // };

    const reqbody = {
      email: loginEmail,
      password: loginPassword,
    };

    return axios
      .post(`${URI}/api/auth/login`, reqbody)
      .then((res) => {
        const jwtToken = res.headers.authorization;
        const memberId = res.headers.memberid;
        console.log(res.headers);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('memberId', memberId);
        console.log(jwtToken);
        dispatch(loginSuccess()); //!()부분 수정하기!//
        // setIsToken(jwtToken);
        // console.log(isToken);
        // navigate('/');
        // window.location.reload();
        // window.alert(`${res.data.name}님 환영합니다.`);
        // console.log(res);
        // const jwtToken = res.headers.authorization;
        // localStorage.setItem('token', JSON.stringify(jwtToken));
        // console.log(res.data.name);
        navigate('/');
        // window.location.reload();
      })
      .catch(() => {
        window.alert('로그인 정보가 일치하지 않습니다. 다시 입력해주세요!');
        setLoginEmail('');
        setLoginPassword('');
      });
  };

  const handleButtonClick = () => {
    alert('hi');
  };

  return (
    <LoginWrap>
      <LoginBox>
        <Logo>
          <img src={stack_logo} alt="LogoIcon" />
        </Logo>
        <ButtonBox>
          <GoggleButton onClick={() => handleButtonClick()}>
            <img src={google_logo} alt="google_logo" />
            Log in with Google
          </GoggleButton>
          <GitHubButton onClick={() => handleButtonClick()}>
            <img src={github_logo} alt="github_logo" />
            Log in with GitHub
          </GitHubButton>
          <FacebookButton onFacebookButtonClick={() => handleButtonClick()}>
            <img src={facebook_logo} alt="facebook_logo" />
            Log in with Facebook
          </FacebookButton>
        </ButtonBox>
        {/* 유효성 검사 입력폼 */}
        <FormSubmitWrap>
          <FormSubmitBox>
            <EmailBox>
              <label htmlFor="email">Email</label>
              {/* 에러 메세지가 ture이면 빨간색 테두리 및 글씨 출력 */}
              {errormessage === true ? (
                <>
                  <ErrorBox>
                    <img src={red_error} alt="red_error" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                      style={{
                        border: '1px solid rgb(222,79,84)',
                        width: '100%',
                      }}
                    ></input>
                  </ErrorBox>
                  <p
                    style={{
                      fontSize: '12px',
                      marginBottom: '16px',
                    }}
                  >
                    Email or password cannot be empty.
                  </p>
                </>
              ) : (
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                ></input>
              )}
            </EmailBox>
            <PasswordBox>
              <PasswordSearchBox>
                <label htmlFor="password">Password</label>
                <StyledLink to="#">Forgot password?</StyledLink>
              </PasswordSearchBox>
              {errormessage === true ? (
                <>
                  <ErrorBox>
                    <img
                      src={red_error}
                      style={{
                        marginRight: '10px',
                        position: 'absolute',
                        right: 0,
                      }}
                      alt="red_error"
                    />
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                      style={{
                        border: '1px solid rgb(222,79,84)',
                        width: '100%',
                        height: '30px',
                      }}
                    ></input>
                  </ErrorBox>
                </>
              ) : (
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={loginPassword}
                  style={{
                    height: '30px',
                  }}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                ></input>
              )}
            </PasswordBox>
            <LoginSubmitButton onClick={handleSubmitButton}>
              Log in
            </LoginSubmitButton>
          </FormSubmitBox>
        </FormSubmitWrap>
        <SignUpMoveBox>
          Don&apos;t have an account?&nbsp;
          <StyledLink to="/signup">Sign up</StyledLink>
          <SignUpOnTalentBox>
            Are you an employer?&nbsp;
            <StyledLink to="#">
              Sign up on Talent&nbsp;
              <svg
                aria-hidden="true"
                className="va-text-bottom sm:d-none svg-icon iconShareSm"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"></path>
              </svg>
            </StyledLink>
          </SignUpOnTalentBox>
        </SignUpMoveBox>
      </LoginBox>
    </LoginWrap>
  );
};

export default Login;
