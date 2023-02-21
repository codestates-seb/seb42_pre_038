import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/main/Footer';
import Header from './components/main/Header';
import Home, { ContainerBox } from './pages/Home';
import Login from './pages/Login';
import QuestionCreate from './pages/QuestionCreate';
import Signup from './pages/Signup';
import QuestionDetail from './pages/QuestionDetail';
import UserInfo from './pages/UserInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ContainerBox>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/questions/ask" element={<QuestionCreate />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
          <Route path="/userinfo" element={<UserInfo />} />
        </Routes>
      </ContainerBox>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
