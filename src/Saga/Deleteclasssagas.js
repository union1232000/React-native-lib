import {
  POST_DELETECLASS,
  DELETECLASS_ERROR,
  DELETECLASS_SUCCESS,
} from '../Redux/Action/Deleteclassaction';
import {Deleteclass} from '../API/Deleteclass';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';

export function* WatchDeleteclass() {
  yield takeEvery(POST_DELETECLASS, GetdeleteclassFlow);
}
export function* GetdeleteclassFlow(action) {
  const response = yield Deleteclass(action.data);
  console.log('sagasss chạy như con chó bên deleteclass', response);
  if (response !== undefined) {
    if (response.resuiltcode == 1) {
      yield put({type: DELETECLASS_SUCCESS, response: response});
    } else {
      yield put({type: DELETECLASS_ERROR, response: response});
    }
  } else {
    yield put({type: DELETECLASS_ERROR, response: response});
  }
}
