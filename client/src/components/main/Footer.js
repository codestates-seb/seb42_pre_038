import styled from 'styled-components';

const FooterWrap = styled.footer`
  font-family: 'system-ui';
  background-color: #232629;
  width: 100vw;
  height: 322px;
  color: hsl(210, 8%, 60%);
`;

const FooterBox = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  padding: 32px 12px 12px 12px;
  display: flex;
  flex-flow: row wrap;
`;

const FooterLogoBox = styled.div`
  flex: 0 0 64px;
  margin: -12px 0 32px 0;
`;

const FooterNav = styled.nav`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;
  div {
    padding: 0 12px 12px 0;
    flex: 1 0 auto;

    h5 {
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 700;
      margin-bottom: 12px;
    }
    h5 > a:hover {
      color: hsl(210, 8%, 60%);
    }
    ul > li {
      padding: 4px 0;
      a {
        font-weight: 400;
      }
      a:hover {
        color: hsl(210, 8%, 60%);
      }
    }
  }
`;

const FooterCopyBox = styled.div`
  width: 313.1px;
  height: 278px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 12px;
  font-weight: 400;
`;

const FooterCopyList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterBox>
        <FooterLogoBox>
          <a href="https://stackoverflow.com" aria-label="Stack Overflow">
            <svg
              aria-hidden="true"
              className="native svg-icon iconLogoGlyphMd"
              width="32"
              height="37"
              viewBox="0 0 32 37"
            >
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>
          </a>
        </FooterLogoBox>
        <FooterNav>
          <div>
            <h5 className="-title">
              <a
                href="https://stackoverflow.com"
                className="js-gps-track"
                data-gps-track="footer.click({ location: 1, link: 15})"
              >
                Stack Overflow
              </a>
            </h5>
            <ul className="-list js-primary-footer-links">
              <li>
                <a
                  href="/"
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 16})"
                >
                  Questions
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 3 })"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div className="site-footer--col">
            <h5 className="-title">
              <a
                href="https://stackoverflow.co/"
                className="js-gps-track"
                data-gps-track="footer.click({ location: 1, link: 19 })"
              >
                Products
              </a>
            </h5>
            <ul className="-list">
              <li>
                <a
                  href="https://stackoverflow.co/teams"
                  className="js-gps-track -link"
                  data-ga='["teams traffic","footer - site nav","stackoverflow.com/teams",null,{"dimension4":"teams"}]'
                  data-gps-track="footer.click({ location: 1, link: 29 })"
                >
                  Teams
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/advertising"
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 21 })"
                >
                  Advertising
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/collectives"
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 40 })"
                >
                  Collectives
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/talent"
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 20 })"
                >
                  Talent
                </a>
              </li>
            </ul>
          </div>
          <div className="site-footer--col">
            <h5 className="-title">
              <a
                className="js-gps-track"
                data-gps-track="footer.click({ location: 1, link: 1 })"
                href="https://stackoverflow.co/"
              >
                Company
              </a>
            </h5>
            <ul className="-list">
              <li>
                <a
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 1 })"
                  href="https://stackoverflow.co/"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 27 })"
                  href="https://stackoverflow.co/company/press"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 9 })"
                  href="https://stackoverflow.co/company/work-here"
                >
                  Work Here
                </a>
              </li>
              <li>
                <a
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 7 })"
                  href="https://stackoverflow.com/legal"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 8 })"
                  href="https://stackoverflow.com/legal/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 37 })"
                  href="https://stackoverflow.com/legal/terms-of-service"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 13 })"
                  href="https://stackoverflow.co/company/contact"
                >
                  Contact Us
                </a>
              </li>
              <li className="" id="consent-footer-link">
                <a href="https://stackoverflow.co/company/contact">
                  Cookie Settings
                </a>
              </li>
              <li>
                <a
                  className="js-gps-track -link"
                  data-gps-track="footer.click({ location: 1, link: 39 })"
                  href="https://stackoverflow.com/legal/cookie-policy"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="site-footer--col site-footer--categories-nav">
            <div>
              <h5 className="-title">
                <a
                  href="https://stackexchange.com"
                  data-gps-track="footer.click({ location: 1, link: 30 })"
                >
                  Stack Exchange Network
                </a>
              </h5>
              <ul className="-list">
                <li>
                  <a
                    href="https://stackexchange.com/sites#technology"
                    className="-link js-gps-track"
                    data-gps-track="footer.click({ location: 1, link: 24 })"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#culturerecreation"
                    className="-link js-gps-track"
                    data-gps-track="footer.click({ location: 1, link: 24 })"
                  >
                    Culture &amp; recreation
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#lifearts"
                    className="-link js-gps-track"
                    data-gps-track="footer.click({ location: 1, link: 24 })"
                  >
                    Life &amp; arts
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#science"
                    className="-link js-gps-track"
                    data-gps-track="footer.click({ location: 1, link: 24 })"
                  >
                    Science
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#professional"
                    className="-link js-gps-track"
                    data-gps-track="footer.click({ location: 1, link: 24 })"
                  >
                    Professional
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#business"
                    className="-link js-gps-track"
                    data-gps-track="footer.click({ location: 1, link: 24 })"
                  >
                    Business
                  </a>
                </li>

                <li className="mt16 md:mt0">
                  <a
                    href="https://api.stackexchange.com/"
                    className="-link js-gps-track"
                    data-gps-track="footer.click({ location: 1, link: 24 })"
                  >
                    API
                  </a>
                </li>

                <li>
                  <a
                    href="https://data.stackexchange.com/"
                    className="-link js-gps-track"
                    data-gps-track="footer.click({ location: 1, link: 24 })"
                  >
                    Data
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </FooterNav>
        <FooterCopyBox className="site-footer--copyright fs-fine md:mt24">
          <FooterCopyList className="-list -social md:mb8">
            <li>
              <a
                className="js-gps-track -link"
                data-gps-track="footer.click({ location: 1, link:4 })"
                href="https://stackoverflow.blog?blb=1"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/officialstackoverflow/"
                className="-link js-gps-track"
                data-gps-track="footer.click({ location: 1, link: 31 })"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/stackoverflow"
                className="-link js-gps-track"
                data-gps-track="footer.click({ location: 1, link: 32 })"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/stack-overflow"
                className="-link js-gps-track"
                data-gps-track="footer.click({ location: 1, link: 33 })"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thestackoverflow"
                className="-link js-gps-track"
                data-gps-track="footer.click({ location: 1, link: 36 })"
              >
                Instagram
              </a>
            </li>
          </FooterCopyList>

          <p className="md:mb0">
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under{' '}
            <span className="td-underline">
              <a href="https://stackoverflow.com/help/licensing">CC BY-SA</a>
            </span>
            <br></br>
            <span id="svnrev">rev&nbsp;2023.2.16.43246</span>
          </p>
        </FooterCopyBox>
      </FooterBox>
    </FooterWrap>
  );
};

export default Footer;
