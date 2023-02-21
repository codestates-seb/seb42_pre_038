import styled from 'styled-components';
// import React from 'react';
import { Link } from 'react-router-dom';

const NavLeftWrap = styled.nav`
  display: block;
  margin-right: 32px;
  font-size: 13px;
  text-align: left;
  color: rgb(35, 38, 41);
  /* border: 1px solid green; */
  box-sizing: border-box;
  width: 173px;
  height: 1083px;
`;

const NavLeftListBox = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 173px;
  height: 29px;
  font-size: 13px;
  li:nth-child(1) {
    margin-top: 0;
  }
  .isBold {
    font-weight: bold;
    margin-top: 30px;
    font-size: 11px;
    cursor: default;
    :hover {
      background-color: #ffffff !important;
      cursor: default;
    }
  }
`;

const NavLeftListItem = styled.li`
  font-size: 13px;
  padding: 6px 12px;
  :link {
    color: rgb(255, 255, 255);
  }
  :hover {
    background-color: #e3e6e8;
    border-radius: 1000px;
    cursor: ${(props) => (props.isBold ? 'none' : 'pointer')};
  }
  :visited {
    background-color: #da680b;
    border-radius: 10px;
    color: #ffffff;
    text-decoration: none;
  }
`;

const NavLeftListItemLink = styled(Link)`
  :hover {
    color: #000000;
  }
`;

const UserInfoLeftNav = () => {
  return (
    <NavLeftWrap>
      <NavLeftListBox>
        <NavLeftListItem className="isBold">
          PERSONAL INFORMATION
        </NavLeftListItem>
        <NavLeftListItem>
          <NavLeftListItemLink to="/userInfo">Edit profile</NavLeftListItemLink>
        </NavLeftListItem>
        <NavLeftListItem>
          <NavLeftListItemLink to="/userInfo">
            Delete profile
          </NavLeftListItemLink>
        </NavLeftListItem>
        <NavLeftListItem className="isBold">EMAIL SETTINGS</NavLeftListItem>
        <NavLeftListItem>
          <NavLeftListItemLink to="#">Edit email settings</NavLeftListItemLink>
        </NavLeftListItem>
        <NavLeftListItem>
          <NavLeftListItemLink to="#">
            Tag watching & ignoring
          </NavLeftListItemLink>
        </NavLeftListItem>
        <NavLeftListItem>
          <NavLeftListItemLink to="#">
            Question subscriptions
          </NavLeftListItemLink>
        </NavLeftListItem>
        <NavLeftListItem className="isBold">SITE SETTINGS</NavLeftListItem>
        <NavLeftListItem>
          <NavLeftListItemLink to="#">Preferences</NavLeftListItemLink>
        </NavLeftListItem>
        <NavLeftListItem>
          <NavLeftListItemLink to="#">Flair</NavLeftListItemLink>
        </NavLeftListItem>
        <NavLeftListItem>
          <NavLeftListItemLink to="#">Hide communities</NavLeftListItemLink>
        </NavLeftListItem>
        <NavLeftListItem className="isBold">ACCESS</NavLeftListItem>
        <NavLeftListItem>
          <NavLeftListItemLink to="#">Your Collectives</NavLeftListItemLink>
        </NavLeftListItem>
        <NavLeftListItem>
          <NavLeftListItemLink to="#">Your logins</NavLeftListItemLink>
        </NavLeftListItem>
        <NavLeftListItem className="isBold">API</NavLeftListItem>
        <NavLeftListItem>
          <NavLeftListItemLink to="#">
            Authorized applications
          </NavLeftListItemLink>
        </NavLeftListItem>
      </NavLeftListBox>
    </NavLeftWrap>
  );
};

export default UserInfoLeftNav;
