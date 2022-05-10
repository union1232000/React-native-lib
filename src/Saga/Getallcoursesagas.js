import {
  POST_GETALLCOURSE,
  GETALLCOURSE_ERROR,
  GETALLCOURSE_SUCCESS,
} from '../Redux/Action/GetallcourseAction';
import {get_allcourse} from '../API/Get_all_course';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';

export function* whatGetallcourse() {
  yield takeEvery(POST_GETALLCOURSE, GetallcourseFlow);
}
export function* GetallcourseFlow() {
  const response = yield get_allcourse();
  console.log('sagasss chạy như con chó', response);
  if (response !== undefined) {
    if (response.resuiltcode == 1) {
      yield put({type: GETALLCOURSE_SUCCESS, response: response});
    } else {
      yield put({type: GETALLCOURSE_ERROR, response: response});
    }
  } else {
    yield put({type: GETALLCOURSE_ERROR, response: response});
  }
}
