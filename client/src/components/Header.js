import styled from 'styled-components';
import Logo from '../img/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
// const isLogin = true;
const HeaderWrap = styled.div`
  align-items: center;
  box-sizing: border-box;
  background-color: rgb(248, 249, 249);
  border-top: 3px solid rgb(244, 130, 36);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.05),
    0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 50px;
  left: 0;
  position: sticky;
  width: 100vw;
  z-index: 100;
`;
const HeaderContainer = styled.div`
  min-height: 5vh;
  width: 1264px;
  height: 47.6px;
  margin: 0 127.6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  > img {
    box-sizing: content-box;
    width: 150px;
    height: 30px;
    padding: 0 8px;
    cursor: pointer;
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
const HeaderMiddle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
`;
const HeaderSearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 10px;
  > input {
    padding: 0 10px;
    border: none;
    margin-left: 5px;
    outline: none;
    width: 800px;
    border-radius: 3px;
  }
  > .MuiSvgIcon-root {
    color: gray;
    width: 25px;
    height: 25px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  width: 212.913px;
  cursor: pointer;
  .Login {
    background-color: #e1ecf4;
    display: flex;
    padding: 5px 10px;
    margin-right: 5px;
    margin-left: 5px;
    background-color: #e1ecf4;
    width: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    font-size: 12px;
    border: 1px solid #0a95ff;
  }
  .Signup {
    color: white;
    font-weight: 600;
    display: flex;
    padding: 5px 10px;
    background-color: #0a95ff;
    width: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    font-size: 12px;
  }
  .HeaderUsersBox {
    color: white;
    background-color: gray;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 800;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <HeaderLeft>
          <img src={Logo} alt="logo" />
          <p>Products</p>
        </HeaderLeft>
        <HeaderMiddle>
          <HeaderSearchContainer>
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </HeaderSearchContainer>
        </HeaderMiddle>
        <HeaderRight>
          <div className="HeaderUsersBox">찬희</div>
          <div className="Login">Login</div>
          <div className="Signup">Singup</div>
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
