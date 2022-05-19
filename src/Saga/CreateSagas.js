import {
  POST_CREATE,
  CREATE_SUCCESS,
  CREATE_ERROR,
} from '../Redux/Action/CreateAction.js';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';
import {postCreate} from '../API/Create_new_course.js';

export function* watchCreate() {
  yield takeEvery(POST_CREATE, createFlow);
}
function* createFlow(action) {
  const {courseName, trainer, startedDate, endedDate, buildingId, roomId} =
    action.data;
  console.log(action.data, 'sagas tao buoi hoc ne');
  const response = yield postCreate(action.data);
  if (response !== undefined) {
    if (response !== undefined) {
      yield put({type: CREATE_SUCCESS, response: response});
    } else {
      yield put({type: CREATE_ERROR, response: response});
    }
  } else yield put({type: CREATE_ERROR, response: response});
}
