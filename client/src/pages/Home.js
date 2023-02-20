import RightSideBar from '../components/main/RightSideBar';
import LeftNavBar from '../components/main/LeftNavBar';
import QuestionList from '../components/question/QuestionList';
import styled from 'styled-components';

const ContainerBox = styled.div`
  max-width: 1264px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const MainBox = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  padding: 24px;
`;
const Home = () => {
  return (
    <>
      <ContainerBox>
        <LeftNavBar />
        <MainBox>
          <QuestionList />
          <RightSideBar />
        </MainBox>
      </ContainerBox>
    </>
  );
};

export default Home;
