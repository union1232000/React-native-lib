import {all} from 'redux-saga/effects';
import {watchCreate} from './CreateSagas';
import {whatGetbuilding} from './Getbuildingsagas';
import {watchLogin} from './Loginsagas';
import {whatGetallcourse} from './Getallcoursesagas';
import {watchCreateclass} from './Createclasssagas';
export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchCreate(),
    watchCreateclass(),
    whatGetbuilding(),
    whatGetallcourse(),
  ]);
}
