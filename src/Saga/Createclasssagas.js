import {
  POST_CREATECLASS,
  CREATECLASS_SUCCESS,
  CREATECLASS_ERROR,
} from '../Redux/Action/Createclassaction';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';
import {postClass} from '../API/Create_new_class';

export function* watchCreateclass() {
  yield takeEvery(POST_CREATECLASS, createclassFlow);
}
function* createclassFlow(action) {
  const {
    courseId,
    className,
    trainer,
    date,
    startedTime,
    endedTime,
    buildingId,
    roomId,
  } = action.data;

  const response = yield postClass(action.data);
  // const error = response.message;
  if (response !== undefined) {
    if (response !== undefined) {
      yield put({type: CREATECLASS_SUCCESS, response: response});
    } else {
      yield put({type: CREATECLASS_ERROR, response: response});
    }
  } else yield put({type: CREATECLASS_ERROR, response: response});
}
