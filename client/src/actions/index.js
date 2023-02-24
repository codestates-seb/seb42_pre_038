export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (data) => ({
  type: LOGIN,
  payload: data,
});

export const logoutSuccess = () => ({
  type: LOGOUT,
});
