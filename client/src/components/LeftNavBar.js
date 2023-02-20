import styled from 'styled-components';
import PublicIcon from '@mui/icons-material/Public';
import StarsIcon from '@mui/icons-material/Stars';
import WorkIcon from '@mui/icons-material/Work';
const LeftNavBarWrap = styled.div`
  display: flex;
  min-width: fit-content;
  min-height: 85vh;
`;
const LeftNavBarContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
const LeftNavBarBox = styled.div`
  display: flex;
  padding: 20px 0 10px 10px;
  height: 100%;
  flex: 0.5;
  max-width: 200px;
  border-right: 1px solid #ddd;
`;
const LeftNavBarContainer = styled.div`
  margin: 10px 0;
  display: flex;
  width: 100%;
`;
const LeftNavBarOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 200%;
  margin: 10px 0;
  font-size: 14px;
  a {
    text-decoration: none;
  }
  a:hover {
    color: #000;
  }
`;
const LeftNavBarOption = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  > p {
    font-size: 14px;
  }
  .LinkBox {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    > p {
      margin: 2px 2px 0 20px;
    }
  }
  .LinkTagBox {
    display: flex;
    align-content: center;
    padding: 5px 0;
    width: 100%;
  }
  .LinkTagBox:hover {
    border-right: 5px solid #fea209;
  }
  .LinkTagBox > .MuiSvgIcon-root {
    font-size: 14px;
    margin-right: 5px;
    color: #fea209;
  }
`;
const LeftNavBar = () => {
  return (
    <LeftNavBarWrap>
      <LeftNavBarContent>
        <LeftNavBarBox>
          <LeftNavBarContainer>
            <LeftNavBarOptions>
              <LeftNavBarOption>
                <a href="/">Home</a>
              </LeftNavBarOption>
              <LeftNavBarOption>
                <a href="/">PUBLIC</a>
                <div className="LinkBox">
                  <div className="LinkTagBox">
                    <PublicIcon />
                    <a href="/questions">Question</a>
                  </div>
                  <p>Tags</p>
                  <p>Users</p>
                </div>
              </LeftNavBarOption>
              <LeftNavBarOption>
                <p>COLLECTIVES</p>
                <div className="LinkBox">
                  <div className="LinkTagBox">
                    <StarsIcon />
                    <p>Explore Collectives</p>
                  </div>
                </div>
              </LeftNavBarOption>
              <LeftNavBarOption>
                <p>FIND A JOB</p>
                <div className="LinkBox">
                  <p>jobs</p>
                  <p>Compaines</p>
                </div>
              </LeftNavBarOption>
              <LeftNavBarOption>
                <p>TEAMS</p>
                <div className="LinkBox">
                  <div className="LinkTagBox">
                    <WorkIcon />
                    <p>Compaines</p>
                  </div>
                </div>
              </LeftNavBarOption>
            </LeftNavBarOptions>
          </LeftNavBarContainer>
        </LeftNavBarBox>
      </LeftNavBarContent>
    </LeftNavBarWrap>
  );
};

export default LeftNavBar;
