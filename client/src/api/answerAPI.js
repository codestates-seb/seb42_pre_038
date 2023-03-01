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
    console.log('에러에러');
    console.log(error);
  }
};

export const getAllQuestion = async (page, filterOption) => {
  try {
    const res = await axios({
      method: 'get',
      url: `${URI}/api/questions/?page=${page}&size=10&sort=${filterOption}`,
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
    const memberId = localStorage.getItem('memberId');
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

export const postVoteUp = async (questionId) => {
  try {
    const jwtToken = localStorage.getItem('token');
    const memberId = localStorage.getItem('memberId');

    const res = await axios({
      method: '[post]',
      url: `${URI}/api/questions/voteUp/${questionId}?memberId=${memberId}`,
      headers: {
        'Content-Type': 'Application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization ': jwtToken,
      },
    });
    console.log('question voteUp 성공');
    return res.data;
  } catch (error) {
    console.log('question voteUp 실패');
    console.log(error);
  }
};

export const patchEditQuestion = async (questionId, title, content) => {
  try {
    const jwtToken = localStorage.getItem('token');
    const memberId = localStorage.getItem('memberId');
    const formData = {
      memberId,
      title,
      content,
    };

    console.log(formData);
    const res = await axios({
      method: 'patch',
      url: `${URI}/api/questions/${questionId}`,
      data: formData,
      headers: {
        'Content-Type': 'Application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization ': jwtToken,
      },
    });
    console.log('question Edit 성공');
    return res.data;
  } catch (error) {
    console.log('question Edit 실패');
    console.log(error);
  }
};
