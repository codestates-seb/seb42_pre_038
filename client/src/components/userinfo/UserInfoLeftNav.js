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
  .isBold {
    font-weight: bold;
    margin-top: 30px;
    font-size: 11px;
    :hover {
      background-color: #ffffff !important;
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
  }
  :visited {
    background-color: #da680b;
    border-radius: 1000px;
    color: #ffffff;
    text-decoration: none;
  }
  :active {
    color: #000000;
  }
`;

const NavLeftListItemLink = styled(Link)`
  cursor: pointer;
  /* :link {
    color: rgb(255, 255, 255);
  } */
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
