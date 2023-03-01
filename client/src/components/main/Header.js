import styled from 'styled-components';
import Logo from '../../images/logo.png';
import SearchBarIcon from '../../images/Search.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess, logoutSuccess } from '../../actions';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const HeaderWrap = styled.div`
  align-items: center;
  box-sizing: border-box;
  background-color: rgb(248, 249, 249);
  border-top: 3px solid rgb(244, 130, 36);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.05),
    0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 50px;
  top: 0;
  position: sticky;
  left: 0;
  width: 100vw;
  z-index: 100;
  justify-content: center;
`;
const HeaderContainer = styled.div`
  width: 1264px;
  height: 47.6px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  .Logo {
    box-sizing: content-box;
    width: 150px;
    height: 30px;
    padding: 0 8px;
    cursor: pointer;
    :hover {
      background-color: #ddd;
      border-radius: 3px;
    }
  }
  > p {
    font-weight: 100;
    font-size: 12px;
    padding: 0 2px;
    box-sizing: content-box;
    cursor: pointer;
    :hover {
      background-color: #ddd;
      border-radius: 33px;
    }
  }
`;
const HeaderSearchContainer = styled.div`
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(187, 191, 195);
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  height: 32px;
  width: 80%;
  margin-right: 10px;
  > img {
    width: 18px;
    margin-left: 10px;
  }
  &:focus-within {
    outline: 3px solid #d6e9f7;
  }
`;
const SearchBarInput = styled.input`
  all: unset;
  font-size: 14px;
  width: 100%;
  padding-left: 5px;
`;
const HeaderRight = styled.ol`
  display: flex;
  align-items: center;
  cursor: pointer;
  .Login {
    margin-right: 8px;
    width: 58.25px;
    height: 47px;
    display: flex;
    align-items: center;
    .LoginBtn {
      background-color: #ebf4fb;
      width: 100%;
      height: 30px;
      justify-content: space-around;
      display: flex;
      align-items: center;
      border-radius: 4px;
      border: 0.5px solid #8aa4b5;
      color: #395d75;
      :hover {
        background-color: #b2d3eb;
      }
      :focus {
        outline: 2px solid #d6e9f7;
      }
    }
  }
  .Signup {
    width: 58.25px;
    height: 47px;
    display: flex;
    align-items: center;
    .SignUpBtn {
      background-color: #0a95ff;
      width: 100%;
      height: 30px;
      justify-content: space-around;
      display: flex;
      align-items: center;
      border-radius: 4px;
      border: 0.5px solid #8aa4b5;
      color: white;
      :hover {
        background-color: #0063c1;
      }
      :focus {
        outline: 2px solid #d6e9f7;
      }
    }
  }
  .HeaderRightBox {
    display: flex;
    justify-content: center;
    width: 60px;
    height: 47px;
    align-items: center;
    :hover {
      background-color: #dee7ec;
    }
    .HeaderUsersBox {
      border-radius: 3px;
      width: 24px;
      height: 24px;
      font-size: 8px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #8aa4b5;
      color: white;
      pointer-events: none;
    }
  }
  .LogoutContainer {
    border-radius: 5px;
    :hover {
      background-color: #0063c1;
    }
    :focus {
      outline: 3px solid #d6e9f7;
    }
    .LogoutBtn {
      width: 90px;
      height: 26px;
      border-radius: 5px;
      align-items: center;
      justify-content: center;
      display: flex;
      color: white;
      background-color: #0a95ff;
      border: 0.5px solid #8aa4b5;
      font-weight: 400;
      text-decoration: none;
      :hover {
        background-color: #0063c1;
      }
    }
  }
`;

const Header = ({ handleSearchValueChange }) => {
  // true = 로그인상태 ,false = 로그아웃상태
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isLogin = useSelector((state) => state.loginInfoReducer.isLogin);
  // const userData = useSelector((state) => state.loginInfoReducer.displayName);
  // const userName = userData ? userData.slice(1, 3) : null;
  const memberId = localStorage.getItem('memberId');
  const [headerName, setHeaderName] = useState('');
  //검색
  const [searchValue, setSearchValue] = useState('');
  //토큰
  const jwtToken = localStorage.getItem('token');
  // eslint-disable-next-line no-undef
  const URI = process.env.REACT_APP_SERVER_URI;
  // const [resultValure, setSesultValure] = useState([]);
  //검색벨류
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchValueChange(searchValue);
      window.scrollTo(0, 0);
    }
  };
  const header = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: jwtToken,
    },
  };
  useEffect(() => {
    if (jwtToken) {
      dispatch(loginSuccess());
    }
    axios
      .get(`${URI}/api/members/${memberId}`, header)
      .then((response) => {
        let name = response.data.data.name;
        setHeaderName(name.slice(1, 3));
        console.log(`name`, headerName);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          window.scrollTo(0, 0);
          localStorage.clear();
          navigate('/');
        }
      });
  }, []);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    localStorage.clear();
    window.scrollTo(0, 0);
    window.location.reload();
    navigate('/');
  };

  return (
    <HeaderWrap>
      <HeaderContainer>
        <HeaderLeft>
          <NavLink to="/">
            <img src={Logo} alt="logo" className="Logo" />
          </NavLink>
          <p>Products</p>
        </HeaderLeft>
        <HeaderSearchContainer>
          <img src={SearchBarIcon} alt="Searchbar" />
          <SearchBarInput
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchInputChange}
            onKeyDown={handleKeyDown}
          />
        </HeaderSearchContainer>
        {jwtToken ? (
          <HeaderRight>
            <div className="HeaderRightBox">
              <NavLink to={`/userinfo/${memberId}`} className="UserInfoBtn">
                <li className="HeaderUsersBox">{headerName}</li>
              </NavLink>
            </div>
            <NavLink to="/" className="LogoutContainer">
              <button className="LogoutBtn" onClick={handleLogout}>
                Logout
              </button>
            </NavLink>
          </HeaderRight>
        ) : (
          <HeaderRight>
            <li className="Login">
              <NavLink to="/login" className="LoginBtn">
                Log in
              </NavLink>
            </li>
            <li className="Signup">
              <NavLink to="/signup" className="SignUpBtn">
                Sign up
              </NavLink>
            </li>
          </HeaderRight>
        )}
      </HeaderContainer>
    </HeaderWrap>
  );
};
Header.propTypes = {
  handleSearchValueChange: PropTypes.func.isRequired,
};
export default Header;
