import {
  POST_GETALLCLASS,
  GETALLCLASS_ERROR,
  GETALLCLASS_SUCCESS,
} from '../Redux/Action/Createclassaction';
import {get_allclass} from '../API/Get_all_class';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';

export function* whatGetallclass() {
  yield takeEvery(POST_GETALLCLASS, GetallclassFlow);
}
export function* GetallclassFlow() {
  const response = yield get_allclass();
  console.log('sagasss chạy như con chó', response);
  if (response !== undefined) {
    if (response.resuiltcode == 1) {
      yield put({type: GETALLCLASS_SUCCESS, response: response});
    } else {
      yield put({type: GETALLCLASS_ERROR, response: response});
    }
  } else {
    yield put({type: GETALLCLASS_ERROR, response: response});
  }
}
