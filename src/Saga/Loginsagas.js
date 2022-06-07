import {
  POST_LOGIN,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
} from '../Redux/Action/LoginAction';
import {Alert} from 'react-native';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';
import {postLogin} from '../API/Login';

export function* watchLogin() {
  yield takeEvery(POST_LOGIN, signInFlow);
}
export function* signInFlow(action) {
  const {user, password} = action.data;
  const response = yield postLogin(action.data);
  if (response !== undefined) {
    if (response !== undefined) {
      yield put({type: SIGNIN_SUCCESS, response: response});
    } else {
      yield put({type: SIGNIN_ERROR, response: response});
    }
  } else {
    yield put({type: SIGNIN_ERROR, response: response});
  }
}
