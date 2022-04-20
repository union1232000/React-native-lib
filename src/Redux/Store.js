import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Saga/Rootsagas';
import allReducers from './Reducers/Index';
const sagamiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagamiddleware));

sagamiddleware.run(rootSaga);
export default store;
