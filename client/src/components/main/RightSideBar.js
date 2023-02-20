import styled from 'styled-components';

const RightSideBarWrap = styled.div`
  margin-left: 24px;
  float: right;
  width: 300px;
  height: auto;
`;

const RightSideBar = () => {
  return (
    <RightSideBarWrap>
      <div className="s-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16">
        <ul className="d-block p0 m0">
          <li className="s-sidebarwidget--header s-sidebarwidget__small-bold-text d-flex fc-black-600 d:fc-black-900 bb bbw1">
            The Overflow Blog
          </li>
          <li className="s-sidebarwidget--item d-flex px16">
            <div className="flex--item1 fl-shrink0">
              <svg
                aria-hidden="true"
                className="va-text-top svg-icon iconPencilSm"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
              </svg>
            </div>
            <div className="flex--item wmn0 ow-break-word">
              <a
                href="https://stackoverflow.blog/2023/02/16/monitoring-debt-builds-up-faster-than-software-teams-can-pay-it-off/?cb=1"
                className="js-gps-track"
                data-ga='["community bulletin board","The Overflow Blog","https://stackoverflow.blog/2023/02/16/monitoring-debt-builds-up-faster-than-software-teams-can-pay-it-off/",null,null]'
                data-gps-track="communitybulletin.click({ priority: 1, position: 0 })"
              >
                Monitoring debt builds up faster than software teams can pay it
                off
              </a>
            </div>
          </li>
          <li className="s-sidebarwidget--item d-flex px16">
            <div className="flex--item1 fl-shrink0">
              <svg
                aria-hidden="true"
                className="va-text-top svg-icon iconPencilSm"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
              </svg>
            </div>
            <div className="flex--item wmn0 ow-break-word">
              <a
                href="https://stackoverflow.blog/2023/02/17/retool-internal-tool-drag-drop-low-code/?cb=1"
                className="js-gps-track"
                title="Because the only thing worse than building internal tools is maintaining them (Ep. 539)"
                data-ga='["community bulletin board","The Overflow Blog","https://stackoverflow.blog/2023/02/17/retool-internal-tool-drag-drop-low-code/",null,null]'
                data-gps-track="communitybulletin.click({ priority: 1, position: 1 })"
              >
                Because the only thing worse than building internal tools is
                maintaining them...
              </a>
            </div>
          </li>
          <li className="s-sidebarwidget--header s-sidebarwidget__small-bold-text d-flex fc-black-600 d:fc-black-900 bb bbw1">
            Featured on Meta
          </li>
          <li className="s-sidebarwidget--item d-flex px16">
            <div className="flex--item1 fl-shrink0">
              <div
                className="favicon favicon-stackexchangemeta"
                title="Meta Stack Exchange"
              ></div>
            </div>
            <div className="flex--item wmn0 ow-break-word">
              <a
                href="https://meta.stackexchange.com/questions/386681/ticket-smash-for-status-review-tag-part-deux?cb=1"
                className="js-gps-track"
                data-ga='["community bulletin board","Featured on Meta","https://meta.stackexchange.com/questions/386681/ticket-smash-for-status-review-tag-part-deux",null,null]'
                data-gps-track="communitybulletin.click({ priority: 3, position: 2 })"
              >
                Ticket smash for [status-review] tag: Part Deux
              </a>
            </div>
          </li>
          <li className="s-sidebarwidget--item d-flex px16">
            <div className="flex--item1 fl-shrink0">
              <div
                className="favicon favicon-stackexchangemeta"
                title="Meta Stack Exchange"
              ></div>
            </div>
            <div className="flex--item wmn0 ow-break-word">
              <a
                href="https://meta.stackexchange.com/questions/386727/weve-added-a-necessary-cookies-only-option-to-the-cookie-consent-popup?cb=1"
                className="js-gps-track"
                data-ga='["community bulletin board","Featured on Meta","https://meta.stackexchange.com/questions/386727/weve-added-a-necessary-cookies-only-option-to-the-cookie-consent-popup",null,null]'
                data-gps-track="communitybulletin.click({ priority: 3, position: 3 })"
              >
                We added a popup
              </a>
            </div>
          </li>
          <li className="s-sidebarwidget--item d-flex px16">
            <div className="flex--item1 fl-shrink0">
              <div
                className="favicon favicon-stackoverflowmeta"
                title="Meta Stack Overflow"
              ></div>
            </div>
            <div className="flex--item wmn0 ow-break-word">
              <a
                href="https://meta.stackoverflow.com/questions/423096/we-ve-made-changes-to-our-privacy-notice-for-collectives?cb=1"
                className="js-gps-track"
                data-ga='["community bulletin board","Featured on Meta","https://meta.stackoverflow.com/questions/423096/we-ve-made-changes-to-our-privacy-notice-for-collectives",null,null]'
                data-gps-track="communitybulletin.click({ priority: 6, position: 4 })"
              >
                We’ve made changes to our Privacy Notice for Collectives™
              </a>
            </div>
          </li>
          <li className="s-sidebarwidget--item d-flex px16">
            <div className="flex--item1 fl-shrink0">
              <div
                className="favicon favicon-stackoverflowmeta"
                title="Meta Stack Overflow"
              ></div>
            </div>
            <div className="flex--item wmn0 ow-break-word">
              <a
                href="https://meta.stackoverflow.com/questions/345643/the-amazon-tag-is-being-burninated?cb=1"
                className="js-gps-track"
                data-ga='["community bulletin board","Featured on Meta","https://meta.stackoverflow.com/questions/345643/the-amazon-tag-is-being-burninated",null,null]'
                data-gps-track="communitybulletin.click({ priority: 6, position: 5 })"
              >
                The [amazon] tag is being burninated
              </a>
            </div>
          </li>
          <li className="s-sidebarwidget--item d-flex px16">
            <div className="flex--item1 fl-shrink0">
              <div
                className="favicon favicon-stackoverflowmeta"
                title="Meta Stack Overflow"
              ></div>
            </div>
            <div className="flex--item wmn0 ow-break-word">
              <a
                href="https://meta.stackoverflow.com/questions/423231/microsoft-azure-collective-launch-and-proposed-tag-changes?cb=1"
                className="js-gps-track"
                data-ga='["community bulletin board","Featured on Meta","https://meta.stackoverflow.com/questions/423231/microsoft-azure-collective-launch-and-proposed-tag-changes",null,null]'
                data-gps-track="communitybulletin.click({ priority: 6, position: 6 })"
              >
                Microsoft Azure Collective launch and proposed tag changes
              </a>
            </div>
          </li>
          <li className="s-sidebarwidget--item d-flex px16">
            <div className="flex--item1 fl-shrink0">
              <div
                className="favicon favicon-stackoverflowmeta"
                title="Meta Stack Overflow"
              ></div>
            </div>
            <div className="flex--item wmn0 ow-break-word">
              <a
                href="https://meta.stackoverflow.com/questions/421831/temporary-policy-chatgpt-is-banned?cb=1"
                className="js-gps-track"
                data-ga='["community bulletin board","Featured on Meta","https://meta.stackoverflow.com/questions/421831/temporary-policy-chatgpt-is-banned",null,null]'
                data-gps-track="communitybulletin.click({ priority: 6, position: 7 })"
              >
                Temporary policy: ChatGPT is banned
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div
        className="s-sidebarwidget mb16 module"
        data-controller="se-uql-list"
      >
        <h2 className="s-sidebarwidget--header mb0 fs-body2">Custom Filters</h2>
        <ul className="s-sidebarwidget--content s-sidebarwidget__items">
          <li className="s-sidebarwidget--item fc-black-300">
            <a
              className="s-btn s-btn__link"
              data-action="se-uql-list#editCurrent"
              href="/questions?edited=true"
            >
              Create a custom filter
            </a>
          </li>
        </ul>
      </div>

      <div className="js-tag-preferences-container">
        <div className="s-sidebarwidget mb16">
          <div className="s-sidebarwidget--header d-flex">
            <h2
              className="flex--item fl1 overflow-hidden ow-break-word mb0 fs-body2"
              id="js-add-watched-label"
            >
              Watched Tags{' '}
            </h2>
            <a
              className="js-edit-watched-tags flex--item ml12"
              href="/users/tag-notifications/21216624#watching-1"
              aria-label="edit your watched tags"
            >
              edit
            </a>
          </div>
          <div className="s-sidebarwidget--content fd-column">
            <div className="js-watched-tag-list d-flex gs4 py4 fw-wrap">
              <script type="text/html" className="js-tag-template">
                <div className="js-tag flex--item ">
                  <a
                    href="/questions/tagged/template"
                    className="post-tag"
                    title="show questions tagged &#39;template&#39;"
                    aria-label="show questions tagged &#39;template&#39;"
                    rel="tag"
                    aria-labelledby="template-container"
                  >
                    template
                  </a>
                </div>
              </script>
              <div className="js-tag flex--item ">
                <a
                  href="/questions/tagged/javascript"
                  className="post-tag user-tag"
                  title="show questions tagged 'javascript'"
                  aria-label="show questions tagged 'javascript'"
                  rel="tag"
                  aria-labelledby="javascript-container"
                >
                  javascript
                </a>
              </div>
              <div className="js-tag flex--item ">
                <a
                  href="/questions/tagged/reactjs"
                  className="post-tag user-tag"
                  title="show questions tagged 'reactjs'"
                  aria-label="show questions tagged 'reactjs'"
                  rel="tag"
                  aria-labelledby="reactjs-container"
                >
                  reactjs
                </a>
              </div>
            </div>

            <div className="js-add-watched-container"></div>

            <div className="js-show-add-watched-container d-flex fd-column ta-center ai-center gsy gs16 mx-auto d-none">
              <div className="flex--item">
                <svg
                  aria-hidden="true"
                  className="fc-blue-400 d:fc-blue-700 svg-spot spotSearch"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M29.22 38.1a3.4 3.4 0 0 1 4.81-4.82l8.81 8.81a3.4 3.4 0 0 1-4.81 4.81l-8.81-8.8Z"
                    opacity=".2"
                  ></path>
                  <path d="M18.5 5a1 1 0 1 0 0 2c.63 0 1.24.05 1.84.15a1 1 0 0 0 .32-1.98A13.6 13.6 0 0 0 18.5 5Zm7.02 1.97a1 1 0 1 0-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91ZM18.5 0a18.5 18.5 0 1 0 10.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1 0 44.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0 0 18.5 0ZM2 18.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0Zm29.58 15.2a1.5 1.5 0 1 1 2.12-2.12l9.83 9.83a1.5 1.5 0 1 1-2.12 2.12l-9.83-9.83Z"></path>
                </svg>
              </div>
              <p className="flex--item wmx2 fc-black-500">
                Watch tags to curate your list of questions.
              </p>
              <a
                href="!#"
                className="js-show-add-watched flex--item s-btn s-btn__filled s-btn__sm s-btn__icon d-none"
              >
                <svg
                  aria-hidden="true"
                  className="svg-icon iconEye"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M9.06 3C4 3 1 9 1 9s3 6 8.06 6C14 15 17 9 17 9s-3-6-7.94-6ZM9 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2Z"></path>
                </svg>
                Watch a tag
              </a>
            </div>
          </div>
        </div>

        <div className="-ignored s-sidebarwidget mb16">
          <div className="s-sidebarwidget--header d-flex">
            <h2
              className="flex--item fl1 mb0 fs-body2"
              id="js-add-ignored-label"
            >
              Ignored Tags
            </h2>
            <a
              className="js-edit-ignored-tags flex--item ml12 d-none"
              href="/users/tag-notifications/21216624#ignored-1"
              aria-label="edit your ignored tags"
            >
              edit
            </a>
          </div>
          <div className="s-sidebarwidget--content fd-column">
            <div className="js-ignored-tag-list d-flex gs4 py4 fw-wrap ai-baseline d-none">
              <script type="text/html" className="js-tag-template">
                <div className="js-tag flex--item ">
                  <a
                    href="/questions/tagged/template"
                    className="post-tag"
                    title="show questions tagged &#39;template&#39;"
                    aria-label="show questions tagged &#39;template&#39;"
                    rel="tag"
                    aria-labelledby="template-container"
                  >
                    template
                  </a>
                </div>
              </script>
            </div>

            <div className="js-add-ignored-container"></div>

            <button className="js-show-add-ignored none mx-auto d-inline-block s-btn s-btn__filled s-btn__sm">
              Add an ignored tag
            </button>

            <div className="js-ignored-edit-visible mt8 d-none">
              <div className="d-flex ai-center">
                <div className="flex--item mr8">
                  <input
                    type="radio"
                    name="hideIgnored"
                    className="js-hide-ignored s-radio"
                    id="0a1828fa-7a43-452a-a635-244410c54631-on"
                  />
                </div>
                <label
                  htmlFor="0a1828fa-7a43-452a-a635-244410c54631-on"
                  className="flex--item s-label fs-body1 fw-normal"
                >
                  Hide questions in your ignored tags
                </label>
              </div>
              <div className="d-flex ai-center">
                <div className="flex--item mr8">
                  <input
                    type="radio"
                    name="hideIgnored"
                    className="js-dim-ignored s-radio"
                    id="0a1828fa-7a43-452a-a635-244410c54631-off"
                  />
                </div>
                <label
                  htmlFor="0a1828fa-7a43-452a-a635-244410c54631-off"
                  className="flex--item s-label fs-body1 fw-normal"
                >
                  Gray out questions in your ignored tags
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="s-sidebarwidget js-join-leave-container mb16">
        <div className="s-sidebarwidget--header">
          <a className="s-sidebarwidget--action" href="/collectives-all">
            see all
          </a>
          Collectives
        </div>
        <div
          className="s-sidebarwidget--content s-sidebarwidget__items js-gps-related-tags py16 fc-black-700"
          id="related-tags"
        >
          <div className="d-flex sm:fd-column ai-center sm:ai-stretch">
            <div className="flex--item d-flex fl1 sm:mb8">
              <div className="flex--item mr12">
                <div className="themed subcommunity-avatar subcommunity-twilio s-avatar s-avatar__32"></div>
              </div>
              <div className="flex--item fl1">
                <h1 className="fs-body2 mb0 fc-blue-600">
                  <a
                    href="/collectives/twilio"
                    className="js-gps-track"
                    data-gps-track="subcommunity_link.click({ subcommunity_user_type: 0, subcommunity_slug: twilio, link_source: 5 })"
                  >
                    Twilio
                  </a>
                </h1>
                <div className="fs-caption fc-black-700 mb8">7k Members</div>
              </div>
              <div className="flex--item">
                <form method="post">
                  <input
                    type="hidden"
                    name="fkey"
                    value="19acc6b3026e7c41e3fc9fade20695c3ebddd2cf0dfd30594b2264cac4cc6bb2"
                  />
                  <button
                    className="flex--item s-btn s-btn__sm s-btn__outlined js-join-community"
                    type="submit"
                    aria-pressed="false"
                    data-slug="twilio"
                    data-url="/collectives/twilio/subscriber/join"
                    formAction="/collectives/twilio/subscriber/join"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
          <span className="fs-body1 v-truncate2 ow-break-word">
            Twilio has democratized channels like voice, text, chat, video, and
            email by virtualizing the world’s communications infrastructure
            through APIs that are simple enough for any developer, yet robust
            enough to power the world’s most demanding applications.
          </span>
        </div>
        <div
          className="s-sidebarwidget--content s-sidebarwidget__items js-gps-related-tags py16 fc-black-700"
          id="related-tags"
        >
          <div className="d-flex sm:fd-column ai-center sm:ai-stretch">
            <div className="flex--item d-flex fl1 sm:mb8">
              <div className="flex--item mr12">
                <div className="themed subcommunity-avatar subcommunity-aws s-avatar s-avatar__32"></div>
              </div>
              <div className="flex--item fl1">
                <h1 className="fs-body2 mb0 fc-blue-600">
                  <a
                    href="/collectives/aws"
                    className="js-gps-track"
                    data-gps-track="subcommunity_link.click({ subcommunity_user_type: 0, subcommunity_slug: aws, link_source: 5 })"
                  >
                    AWS
                  </a>
                </h1>
                <div className="fs-caption fc-black-700 mb8">7k Members</div>
              </div>
              <div className="flex--item">
                <form method="post">
                  <input
                    type="hidden"
                    name="fkey"
                    value="19acc6b3026e7c41e3fc9fade20695c3ebddd2cf0dfd30594b2264cac4cc6bb2"
                  />
                  <button
                    className="flex--item s-btn s-btn__sm s-btn__outlined js-join-community"
                    type="submit"
                    aria-pressed="false"
                    data-slug="aws"
                    data-url="/collectives/aws/subscriber/join"
                    formAction="/collectives/aws/subscriber/join"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
          <span className="fs-body1 v-truncate2 ow-break-word">
            Amazon Web Services (AWS) is the world’s most comprehensive and
            broadly adopted cloud platform, offering over 200 fully featured
            services from data centers globally. The AWS Collective is a
            community-driven site with resources for developers.
          </span>
        </div>
        <div
          className="s-sidebarwidget--content s-sidebarwidget__items js-gps-related-tags py16 fc-black-700"
          id="related-tags"
        >
          <div className="d-flex sm:fd-column ai-center sm:ai-stretch">
            <div className="flex--item d-flex fl1 sm:mb8">
              <div className="flex--item mr12">
                <div className="themed subcommunity-avatar subcommunity-wso2 s-avatar s-avatar__32"></div>
              </div>
              <div className="flex--item fl1">
                <h1 className="fs-body2 mb0 fc-blue-600">
                  <a
                    href="/collectives/wso2"
                    className="js-gps-track"
                    data-gps-track="subcommunity_link.click({ subcommunity_user_type: 0, subcommunity_slug: wso2, link_source: 5 })"
                  >
                    WSO2
                  </a>
                </h1>
                <div className="fs-caption fc-black-700 mb8">4k Members</div>
              </div>
              <div className="flex--item">
                <form method="post">
                  <input
                    type="hidden"
                    name="fkey"
                    value="19acc6b3026e7c41e3fc9fade20695c3ebddd2cf0dfd30594b2264cac4cc6bb2"
                  />
                  <button
                    className="flex--item s-btn s-btn__sm s-btn__outlined js-join-community"
                    type="submit"
                    aria-pressed="false"
                    data-slug="wso2"
                    data-url="/collectives/wso2/subscriber/join"
                    formAction="/collectives/wso2/subscriber/join"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
          <span className="fs-body1 v-truncate2 ow-break-word">
            WSO2 solutions give enterprises the flexibility to deploy
            applications and services on-premises, on private or public clouds,
            or in hybrid environments. Our collective aims to enable developers
            to build value-added services and get to market faster.
          </span>
        </div>
      </div>
    </RightSideBarWrap>
  );
};

export default RightSideBar;
