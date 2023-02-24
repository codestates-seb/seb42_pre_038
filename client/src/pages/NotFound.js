import styled from 'styled-components';
import { ReactComponent as NotfoundImg } from '../images/not_found.svg';
export const MainBox = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerBox = styled.div`
  max-width: 1264px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const NotFoundWrap = styled.div`
  min-width: 100%;
  background-color: var(--black-050);
  position: relative;
  width: 100%;
  flex: 1 0 auto;
  margin: 0 auto;
  text-align: left;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ImgBox = styled.div`
  width: 195px;
  height: 195px;
  margin: calc(var(--su32) / 2);
`;
const TextBox = styled.div`
  margin: calc(var(--su32) / 2);
`;
const TitleH1 = styled.h1`
  font-size: 27px;
`;

const TitleP = styled.p`
  font-size: 19px;
  margin-bottom: 24px;
`;
const TextP = styled.p`
  margin-bottom: 1em;
  margin-top: 0;
  font-size: 15px;
  a {
    color: hsl(206deg 100% 40%);
    text-decoration: none;
    cursor: pointer;
  }
`;

const NotFound = () => {
  return (
    <NotFoundWrap>
      <ContainerBox>
        <MainBox>
          <ContentBox>
            <ImgBox>
              <NotfoundImg />
            </ImgBox>
            <TextBox>
              <TitleH1>Page not found</TitleH1>
              <TitleP>
                We&apos;re sorry, we couldn&apos;t find the page you requested.
              </TitleP>
              <TextP>
                Try <a href="/">searching for similar questions</a>
              </TextP>
              <TextP>
                Browse our <a href="/">recent questions</a>
              </TextP>
              <TextP>
                Browse our <a href="/">popular tags</a>
              </TextP>
              <TextP>
                If you feel something is missing that should be here,{' '}
                <a href="/">contact us.</a>
              </TextP>
            </TextBox>
          </ContentBox>
        </MainBox>
      </ContainerBox>
    </NotFoundWrap>
  );
};

export default NotFound;
