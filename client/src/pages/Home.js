import RightSideBar from '../components/main/RightSideBar';
import LeftNavBar from '../components/main/LeftNavBar';
import QuestionList from '../components/question/QuestionList';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ContainerBox = styled.div`
  max-width: 1264px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const MainBox = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  padding: 24px;
`;
const Home = ({ searchValue }) => {
  return (
    <ContainerBox>
      <LeftNavBar />
      <MainBox>
        <QuestionList searchValue={searchValue} />
        <RightSideBar />
      </MainBox>
    </ContainerBox>
  );
};
Home.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default Home;
