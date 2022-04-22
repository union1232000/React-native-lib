import {all} from 'redux-saga/effects';
import {watchCreate} from './CreateSagas';
import {whatGetbuilding} from './Getbuildingsagas';
import {watchLogin} from './Loginsagas';
export default function* rootSaga() {
  yield all([watchLogin(), watchCreate(), whatGetbuilding()]);
}
