import { LOGIN, LOGOUT } from '../actions/index';

const initialstate = {
  isLogin: false,
  memberId: null,
  displayName: null,
};

const loginInfoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLogin: true,
        ...action.payload,
      };
    case LOGOUT:
      return {
        isLogin: false,
      };
    default:
      return state;
  }
};

export default loginInfoReducer;
