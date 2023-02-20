import styled from 'styled-components';
import Logo from '../img/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
// const isLogin = true;
const HeaderWrap = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  z-index: 10000;
  min-height: 5vh;
  width: 100vw;
  height: 47.6px;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: #fbfafa;
  box-shadow: 0px 0.5px 2px rgba(0, 0, 5);
  border-top: 2px solid red;
`;
const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0 10px;
  > img {
    width: 150px;
    object-fit: contain;
    padding: 0;
    cursor: pointer;
  }
  > p {
    font-weight: 100;
    font-size: 14px;
    margin: 0px 10px;
    cursor: pointer;
    padding: 5px 10px;
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
  padding: 10px 10px;
`;
const HeaderSearchContainer = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid black;
  > input {
    border: none;
    margin-left: 5px;
    outline: none;
    width: 100%;
  }
  > .MuiSvgIcon-root {
    color: #ccc;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  .HeaderLogoutBox {
    display: flex;
    padding: 5px 10px;
    margin: 0 10px;
    background-color: red;
    width: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 700;
  }
  .HeaderUsersBox {
    color: white;
    background-color: gray;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 10px;
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
          <div className="HeaderLogoutBox">Logout</div>
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
