import Filter from '../components/Filter';
import Footer from '../components/Footer';
import RightSideBar from '../components/RightSideBar';
import Header from '../components/Header';
import LeftNavBar from '../components/LeftNavBar';
import QuestionList from '../components/QuestionList';
const Home = () => {
  return (
    <div>
      <Header />
      <LeftNavBar />
      <QuestionList />
      <RightSideBar />
      <Filter />
      <Footer />
    </div>
  );
};

export default Home;
