import Footer from '../components/Footer';
import RightSideBar from '../components/RightSideBar';
import Header from '../components/Header';
import LeftNavBar from '../components/LeftNavBar';
import QuestionList from '../components/QuestionList';
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
    <div>
      <Header />
      <ContainerBox>
        <LeftNavBar />
        <MainBox>
          <QuestionList />
          <RightSideBar />
        </MainBox>
      </ContainerBox>
      <Footer />
    </div>
  );
};

export default Home;
