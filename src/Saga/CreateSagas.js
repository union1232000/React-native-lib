import {
  POST_CREATE,
  CREATE_SUCCESS,
  CREATE_ERROR,
} from '../Redux/Action/CreateAction.js';
import {call, takeEvery, put, takeLatest} from 'react-native-reanimated';
import {postCreate} from '../API/Create_new_course.js';

export function* watchCreate() {
  yield takeEvery(POST_CREATE, createFlow);
}
export function* createFlow(action) {
  const {courseName, trainer, startedDate, endedDate, buildingId, roomId} =
    action.data;
  const response = yield postCreate(
    courseName,
    trainer,
    startedDate,
    endedDate,
    buildingId,
    roomId,
  );
  const error = response.message;
  if (response !== undefined) {
    if (response !== undefined) {
      yield put({type: CREATE_SUCCESS, response: response});
    } else {
      yield put({type: CREATE_ERROR, response: response});
    }
  } else yield put({type: CREATE_ERROR, response: response});
}
