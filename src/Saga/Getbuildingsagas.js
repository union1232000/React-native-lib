import {
  POST_GETBUILDING,
  GETBUILDING_ERROR,
  GETBUILDING_SUCCESS,
} from '../Redux/Action/Getbuilding';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';
import {get_building} from '../API/Getbuilding';

export function* whatGetbuilding() {
  yield takeEvery(POST_GETBUILDING, GetbuildingFlow);
}
export function* GetbuildingFlow() {
  console.log('saga running');
  const response = yield get_building();

  const error = response.message;
  if (response !== undefined) {
    if (response.resuiltcode == 1) {
      yield put({type: GETBUILDING_SUCCESS, response: response});
    } else {
      yield put({type: GETBUILDING_ERROR, response: response});
    }
  } else {
    yield put({type: GETBUILDING_ERROR, response: response});
  }
}
