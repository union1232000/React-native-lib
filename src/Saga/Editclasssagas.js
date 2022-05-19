import {
  POST_EDITCLASSS,
  EDITCLASS_SUCCESS,
  EDITCLASS_ERROR,
} from '../Redux/Action/Editclassaction';
import {call, takeEvery, put, takeLatest} from 'redux-saga/effects';
import {Editclass} from '../API/Editclass';

export function* watcheditclass() {
  yield takeEvery(POST_EDITCLASSS, EditclassFlow);
}
function* EditclassFlow(action) {
  const {
    classId,
    className,
    trainer,
    date,
    startedTime,
    endedTime,
    buildingId,
    roomId,
  } = action.data;
  console.log(action.data, '->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  const response = yield Editclass(action.data);

  if (response !== undefined) {
    if (response !== undefined) {
      yield put({type: EDITCLASS_SUCCESS, response: response});
    } else {
      yield put({type: EDITCLASS_ERROR, response: response});
    }
  } else yield put({type: EDITCLASS_ERROR, response: response});
}
