import {all} from 'redux-saga/effects';
import {watchCreate} from './CreateSagas';
import {whatGetbuilding} from './Getbuildingsagas';
import {watchLogin} from './Loginsagas';
import {whatGetallcourse} from './Getallcoursesagas';
import {watchCreateclass} from './Createclasssagas';
import {whatGetallclass} from './Getallclasssagas';
import {watchDeletecourse} from './Deletecoursesagas';
import {WatchDeleteclass} from './Deleteclasssagas';
import {watcheditcourse} from './Editcoursesagas';
import {watcheditclass} from './Editclasssagas';
export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchCreate(),
    whatGetbuilding(),
    whatGetallcourse(),
    watchCreateclass(),
    whatGetallclass(),
    watchDeletecourse(),
    WatchDeleteclass(),
    watcheditcourse(),
    watcheditclass(),
  ]);
}
