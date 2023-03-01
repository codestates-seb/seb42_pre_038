import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
const LeftNavBarWrap = styled.div`
  width: 164px;
  border-right: 1px solid #d6d9dc;
  color: #91979e;
  position: relative;
`;
const LeftNavBarBox = styled.div`
  padding-inline-start: 20px;
  position: fixed;
`;
const LeftNavBarNav = styled.nav`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
`;
const LeftNavBarOl = styled.ol`
  display: block;
  list-style-type: decimal;
  margin-block-start: 2em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  & .HomeDivBox {
    font-size: 14px;
    font-weight: 600;
  }
  .HomeBox {
    display: flex;
  }
  .LeftNavBarItem {
    display: flex;
    align-items: center;
    box-sizing: content-box;
    width: 131px;
    height: 26px;
    padding-top: 4px;
    padding-right: 4px;
    padding-left: 8px;
    padding-bottom: 4px;
    cursor: pointer;
    background-color: #f1f2f4;
    border-right: 3px solid #e98432;
  }
`;
const PublicBar = styled.ol`
  padding-left: 10px;
  margin-top: 16px;
  align-items: center;
  .Item {
    align-items: center;
    padding-left: 20px;
  }
  > li {
    width: 100%;
    height: 33px;
    display: flex;
  }
  .QuestionsItem {
    border: 0;
    outline: 0;
    background-color: white;
    align-items: center;
    display: flex;
    margin: 10px 0;
    cursor: pointer;
    color: #91979e;
    :hover {
      color: black;
    }
  }
`;
const LeftNavBar = () => {
  const navigate = useNavigate();
  // const CurrentLocation = useLocation().pathname;
  const onClickHandler = () => {
    navigate('/');
  };
  return (
    <LeftNavBarWrap>
      <LeftNavBarBox>
        <LeftNavBarNav>
          <LeftNavBarOl>
            <li className="LeftNavBarItem">
              <NavLink to="/" className="LeftNavBarLink">
                <div className="HomeBox">
                  <div className="HomeDivBox">Home</div>
                </div>
              </NavLink>
            </li>
            <PublicBar>
              <li>Public</li>
              <button className="QuestionsItem" onClick={onClickHandler}>
                <PublicIcon className="PublicIcon" />
                Questions
              </button>
              <li className="Item">Tags</li>
              <li className="Item">Companies</li>
            </PublicBar>
          </LeftNavBarOl>
        </LeftNavBarNav>
      </LeftNavBarBox>
    </LeftNavBarWrap>
  );
};

export default LeftNavBar;
