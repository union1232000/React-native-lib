import {combineReducers} from 'redux';
import Loginreducers from './Loginreducers';
import Createreducers from './Createreducers';
import Getbuildingreducers from './Getbuildingreducers';
import Getallcoursereducers from './Getallcoursereducers';
import Createclassreducers from './Createclassreducers';
const allReducers = combineReducers({
  Loginreducers,
  Createreducers,
  Createclassreducers,
  Getbuildingreducers,
  Getallcoursereducers,
});
export default allReducers;
