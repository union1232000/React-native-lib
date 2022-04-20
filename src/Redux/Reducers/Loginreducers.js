import {
  DID_LOGIN_ACTION,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
} from '../Action/LoginAction';
const initialState = {
  loa111111111111111111ding: false,
};
const Loginreducers = (login = initialState, action) => {
  try {
    const response = action.response;
    switch (action.type) {
      case SIGNIN_SUCCESS:
        return {...login, response};
      case SIGNIN_ERROR:
        return {...login, response};
      case DID_LOGIN_ACTION:
        return 0;
      default:
        return login;
    }
  } catch (error) {}
};
export default Loginreducers;
