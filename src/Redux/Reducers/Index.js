import {combineReducers} from 'redux';
import Loginreducers from './Loginreducers';
import Createreducers from './Createreducers';
import Getbuildingreducers from './Getbuildingreducers';
import Getallcoursereducers from './Getallcoursereducers';
const allReducers = combineReducers({
  Loginreducers,
  Createreducers,
  Getbuildingreducers,
  Getallcoursereducers,
});
export default allReducers;
