export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = () => ({
  type: LOGIN,
  // payload: data,
});

export const logoutSuccess = () => ({
  type: LOGOUT,
});

export const testAction = () => ({});
