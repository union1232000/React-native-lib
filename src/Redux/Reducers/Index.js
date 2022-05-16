import {combineReducers} from 'redux';
import Loginreducers from './Loginreducers';
import Createreducers from './Createreducers';
import Getbuildingreducers from './Getbuildingreducers';
import Getallcoursereducers from './Getallcoursereducers';
import Createclassreducers from './Createclassreducers';
import Getallclassreducers from './Getallclassreducers';
import Deletecoursereducers from './Deletecoursereducers';
import Deleteclassreducers from './Deleteclassreducers';
const allReducers = combineReducers({
  Loginreducers,
  Createreducers,
  Getbuildingreducers,
  Getallcoursereducers,
  Createclassreducers,
  Getallclassreducers,
  Deletecoursereducers,
  Deleteclassreducers,
});
export default allReducers;
