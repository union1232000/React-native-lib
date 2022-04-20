export const POST_LOGIN = 'POST_LOGIN';
export const SIGNIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNIN_ERROR = 'LOGIN_ERROR';
export const DID_LOGIN_ACTION = ' DID_LOGIN_ACTION';

export const loginAction = (user, password) => {
  return {
    type: POST_LOGIN,
    data: {user, password},
  };
};
