import axios from 'axios';
// eslint-disable-next-line no-undef
const URI = process.env.REACT_APP_SERVER_URI;

export const getAllAnswer = async (questionId) => {
  try {
    const res = await axios({
      method: 'get',
      url: `${URI}/api/answers/${questionId}?page=1&size=10&sort=1`,
    });
    console.log('answer 성공');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllQuestion = async () => {
  try {
    const res = await axios({
      method: 'get',
      url: `${URI}/api/questions/?page=1&size=10&sort=0`,
    });
    console.log('questions 성공');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuestionDetail = async (questionId) => {
  try {
    const res = await axios({
      method: 'get',
      url: `${URI}/api/questions/${questionId}`,
    });
    console.log('questions detail성공');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postCreateAnswer = async (questionId, answerContent) => {
  try {
    console.log('dsdsd');
    const jwtToken = localStorage.getItem('token');
    const memberId = Number(localStorage.getItem('memberId'));
    const formData = {
      memberId,
      name: '테스트',
      questionId,
      answerContent,
    };
    console.log(formData);
    const res = await axios({
      method: 'post',
      url: `${URI}/api/answers`,
      data: formData,
      headers: {
        'Content-Type': 'Application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization ': jwtToken,
      },
    });
    console.log('answer create 성공');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
