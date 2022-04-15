export const POST_LOGIN = 'POST_LOGIN';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_ERROR = 'POST_LOGIN_ERROR';

export const loginAction = (user, password) => {
  return {
    type: POST_LOGIN,
    data: {user, password},
  };
};
