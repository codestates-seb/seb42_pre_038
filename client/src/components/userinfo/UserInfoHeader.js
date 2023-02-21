import styled from 'styled-components';

const UserInfoHeaderWrap = styled.div`
  width: 1067px;
  position: relative;
  margin-bottom: var(--su16);
`;

const UserInfoItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: calc(var(--su16) / 2 * -1);
`;

const UserNameBox = styled.div`
  margin-left: 20px;
  margin-top: 12px;
`;

const UserImgLink = styled.a`
  margin-top: 12px;
`;

const UserInfoTap = styled.div`
  padding: 2px 0;
  margin: 20px 0 20px 0;
`;
const UserInfoHeader = () => {
  return (
    <UserInfoHeaderWrap>
      <UserInfoItem>
        <UserImgLink className="flex--item" href="/userinfo">
          <div className="md:d-none js-usermini-avatar-container">
            <div className="bar-md bs-sm">
              <img
                src="https://lh3.googleusercontent.com/a/AEdFTp7O0K54OYUvKOu82Somj9kcpfuKTwa0b7Ud102C=k-s256"
                alt="장은수's user avatar"
                width="128"
                height="128"
                className="bar-sm bar-md d-block"
              />
            </div>
          </div>
        </UserImgLink>
        <UserNameBox className="flex--item">
          <div className="d-flex ai-center fw-wrap gs8 wmx4">
            <div className="flex--item mb12 fs-headline2 lh-xs">장은수</div>
            <div className="flex--item">
              <div className="d-flex ai-center fw-nowrap gs4"></div>
            </div>
          </div>

          <ul className="list-reset s-anchors s-anchors__inherit d-flex fc-light gs8 mln4 fw-wrap">
            <li className="flex--item">
              <div className="d-flex gs4 gsx ai-center">
                <div className="flex--item fc-black-350">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconCake"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z"></path>
                  </svg>
                </div>
                <div className="flex--item">
                  취업하기 <span title="2023-02-15 05:33:40Z">D-36 days</span>
                </div>
              </div>
            </li>

            <li className="flex--item">
              <div className="d-flex gs4 gsx ai-center">
                <div className="flex--item fc-black-350">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconClock"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8Zm0-2c3.27 0 6-2.73 6-6s-2.73-6-6-6-6 2.73-6 6 2.73 6 6 6ZM8 5h1.01L9 9.36l3.22 2.1-.6.93L8 10V5Z"></path>
                  </svg>
                </div>
                <div className="flex--item">집에가지말자</div>
              </div>
            </li>

            <li id="js-daily-access-calendar-container" className="flex--item">
              <div className="d-flex gs4 gsx ai-center">
                <div className="flex--item fc-black-350">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconCalendar"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14 2h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h1V0h2v2h6V0h2v2ZM3 6v9h12V6H3Zm2 2h2v2H5V8Zm0 3h2v2H5v-2Zm3 0h2v2H8v-2Zm3 0h2v2h-2v-2Zm0-3h2v2h-2V8ZM8 8h2v2H8V8Z"></path>
                  </svg>
                </div>
                <div className="flex--item">모두들 화이팅!</div>
              </div>
            </li>
          </ul>
        </UserNameBox>
        <div className="ps-absolute t0 r0 d-flex gs6 fw-wrap">
          <a
            className="flex--item s-btn s-btn__outlined s-btn__muted s-btn__icon s-btn__sm"
            href="/users/edit/21216624"
          >
            <svg
              aria-hidden="true"
              className="svg-icon iconPencil"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z"></path>
            </svg>
            Edit profile
          </a>

          <ul className="flex--item list-reset">
            <li role="menuitem">
              <a
                href="https://stackexchange.com/users/27789991/%ec%9e%a5%ec%9d%80%ec%88%98"
                className="d-flex ai-center ws-nowrap s-btn s-btn__outlined s-btn__muted s-btn__icon s-btn__sm d-flex ai-center"
              >
                <svg
                  aria-hidden="true"
                  className="native mln2 mr2 svg-icon iconLogoSEXxs"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H3Z"
                    fill="#8FD8F7"
                  ></path>
                  <path
                    d="M15 11H3c0 1.1.9 2 2 2h5v3l3-3a2 2 0 0 0 2-2Z"
                    fill="#155397"
                  ></path>
                  <path fill="#46A2D9" d="M3 5h12v2H3z"></path>
                  <path fill="#2D6DB5" d="M3 8h12v2H3z"></path>
                </svg>
                Network profile
              </a>
            </li>
          </ul>
        </div>
      </UserInfoItem>
      <UserInfoTap className="d-flex ai-center jc-space-between fw-wrap mb16 js-user-header">
        <div className="flex--item s-navigation">
          <a
            href="/users/21216624/%ec%9e%a5%ec%9d%80%ec%88%98?tab=profile"
            className="s-navigation--item is-selected"
            data-shortcut="P"
          >
            Profile
          </a>
          <a
            href="/users/21216624/%ec%9e%a5%ec%9d%80%ec%88%98?tab=topactivity"
            className="s-navigation--item"
            data-shortcut="A"
          >
            Activity
          </a>

          <a
            href="/users/saves/21216624/all"
            className="js-gps-track s-navigation--item"
            data-gps-track="saves.visit;"
          >
            Saves
          </a>

          <a href="/users/preferences/21216624" className="s-navigation--item">
            Settings
          </a>
        </div>
        <div className="flex--item ml-auto">
          <div className="s-navigation s-navigation__muted ai-center"></div>
        </div>
      </UserInfoTap>
    </UserInfoHeaderWrap>
  );
};

export default UserInfoHeader;
