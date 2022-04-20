import {combineReducers} from 'redux';
import Loginreducers from './Loginreducers';
import Createreducers from './Createreducers';
const allReducers = combineReducers({
  Loginreducers,
  Createreducers,
});
export default allReducers;
