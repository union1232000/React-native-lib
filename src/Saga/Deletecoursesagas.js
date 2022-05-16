import {
  POST_DELETECOURSE,
  DELETECOURSE_ERROR,
  DELETECOURSE_SUCCESS,
} from '../Redux/Action/Deletecourseaction';
import {Deletecourse} from '../API/Deletecourse';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';

export function* watchDeletecourse() {
  yield takeEvery(POST_DELETECOURSE, GetdeletecourseFlow);
}
export function* GetdeletecourseFlow(action) {
  const response = yield Deletecourse(action.data);
  console.log('sagasss chạy như con chó bên delete', response);
  if (response !== undefined) {
    if (response.resuiltcode == 1) {
      yield put({type: DELETECOURSE_SUCCESS, response: response});
    } else {
      yield put({type: DELETECOURSE_ERROR, response: response});
    }
  } else {
    yield put({type: DELETECOURSE_ERROR, response: response});
  }
}
