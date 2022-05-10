import {all} from 'redux-saga/effects';
import {watchCreate} from './CreateSagas';
import {whatGetbuilding} from './Getbuildingsagas';
import {watchLogin} from './Loginsagas';
import {whatGetallcourse} from './Getallcoursesagas';
import {watchCreateclass} from './Createclasssagas';
import {whatGetallclass} from './Getallclasssagas';
export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchCreate(),
    whatGetbuilding(),
    whatGetallcourse(),
    watchCreateclass(),
    whatGetallclass,
  ]);
}
