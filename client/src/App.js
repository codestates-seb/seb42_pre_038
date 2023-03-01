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
// import UserEdit from './pages/UserEdit';
import AnswerEdit from './pages/AnswerEdit';
// import UserDelte from './pages/UserDelete';
import NotFound from './pages/NotFound';
import { useState } from 'react';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchValueChange = (value) => {
    setSearchValue(value);
  };

  return (
    <BrowserRouter>
      <Header handleSearchValueChange={handleSearchValueChange} />
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/questions/ask" element={<QuestionCreate />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route path="/questions/:id/edit" element={<QuestionEdit />} />
        <Route path="/answers/:id/edit" element={<AnswerEdit />} />
        <Route path="/userinfo/:id" element={<UserInfo />} />
        {/* <Route path="/useredit" element={<UserEdit />} />
        <Route path="/userdelete" element={<UserDelte />} /> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
