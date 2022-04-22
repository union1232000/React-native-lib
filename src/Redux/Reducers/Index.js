import {combineReducers} from 'redux';
import Loginreducers from './Loginreducers';
import Createreducers from './Createreducers';
import Getbuildingreducers from './Getbuildingreducers';
const allReducers = combineReducers({
  Loginreducers,
  Createreducers,
  Getbuildingreducers,
});
export default allReducers;
