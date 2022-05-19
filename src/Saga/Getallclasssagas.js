import {put, takeEvery} from 'redux-saga/effects';
import {get_allclass} from '../API/Get_all_class';
import {
  GETALLCLASS_ERROR,
  GETALLCLASS_SUCCESS,
  POST_GETALLCLASS,
} from '../Redux/Action/GetclassAction';
export function* whatGetallclass() {
  yield takeEvery(POST_GETALLCLASS, GetallclassFlow);
}
export function* GetallclassFlow(action) {
  const response = yield get_allclass(action.data);
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
//action getallclass may dau???
