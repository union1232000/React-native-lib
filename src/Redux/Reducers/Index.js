import {combineReducers} from 'redux';
import Loginreducers from './Loginreducers';
import Createreducers from './Createreducers';
import Getbuildingreducers from './Getbuildingreducers';
import Getallcoursereducers from './Getallcoursereducers';
import Createclassreducers from './Createclassreducers';
import Getallclassreducers from './Getallclassreducers';
const allReducers = combineReducers({
  Loginreducers,
  Createreducers,
  Getbuildingreducers,
  Getallcoursereducers,
  Createclassreducers,
  Getallclassreducers,
});
export default allReducers;
