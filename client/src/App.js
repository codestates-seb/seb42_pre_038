import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/main/Footer';
import Header from './components/main/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import QuestionCreate from './pages/QuestionCreate';
import QuestionEdit from './pages/QuestionEdit';
import QuestionDetail from './pages/QuestionDetail';
import UserInfo from './pages/UserInfo';
import UserEdit from './pages/UserEdit';
import AnswerEdit from './pages/AnswerEdit';
import UserDelte from './pages/UserDelete';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/questions/ask" element={<QuestionCreate />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route path="/questions/:id/edit" element={<QuestionEdit />} />
        <Route path="/posts/:id/edit" element={<AnswerEdit />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/useredit" element={<UserEdit />} />
        <Route path="/userdelete" element={<UserDelte />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
