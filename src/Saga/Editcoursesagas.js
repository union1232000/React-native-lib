import {
  POST_EDITCOURSE,
  EDITCOURSE_SUCCESS,
  EDITCOURSE_ERROR,
} from '../Redux/Action/Editcourseaction';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';
import {Editcourse} from '../API/Editcourse';

export function* watcheditcourse() {
  yield takeEvery(POST_EDITCOURSE, EditcourseFlow);
}
function* EditcourseFlow(action) {
  const {
    courseId,
    courseName,
    trainer,
    startedDate,
    endedDate,
    buildingId,
    roomId,
  } = action.data;

  const response = yield Editcourse(action.data);
  if (response !== undefined) {
    if (response !== undefined) {
      yield put({type: EDITCOURSE_SUCCESS, response: response});
    } else {
      yield put({type: EDITCOURSE_ERROR, response: response});
    }
  } else yield put({type: EDITCOURSE_ERROR, response: response});
}
