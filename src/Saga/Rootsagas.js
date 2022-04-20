import {all} from 'redux-saga/effects';
import {watchCreate} from './CreateSagas';
import {watchLogin} from './Loginsagas';
export default function* rootSaga() {
  yield all([watchLogin()]);
  yield all([watchCreate()]);
}
