import {combineReducers} from 'redux';
import Loginreducers from './Loginreducers';
import Createreducers from './Createreducers';
import Getbuildingreducers from './Getbuildingreducers';
import Getallcoursereducers from './Getallcoursereducers';
import Createclassreducers from './Createclassreducers';
import Getallclassreducers from './Getallclassreducers';
import Deletecoursereducers from './Deletecoursereducers';
import Deleteclassreducers from './Deleteclassreducers';
import Editcoursereducers from './Editcoursereducers';
import Editclassreducers from './Editclassreducers';
const allReducers = combineReducers({
  Loginreducers,
  Createreducers,
  Getbuildingreducers,
  Getallcoursereducers,
  Createclassreducers,
  Getallclassreducers,
  Deletecoursereducers,
  Deleteclassreducers,
  Editcoursereducers,
  Editclassreducers,
});
export default allReducers;
