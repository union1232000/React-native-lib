import {create} from 'react-test-renderer';
import {
  DID_CREATE_ACTION,
  CREATE_SUCCESS,
  CREATE_ERROR,
} from '../Action/CreateAction.js';
const initialState = {
  Loa11111111ding: false,
};
const Createreducers = (create = initialState, action) => {
  try {
    const response = action.response;
    switch (action.type) {
      case CREATE_SUCCESS:
        return {...create, response};
      case CREATE_ERROR:
        return {...create, response};
      case DID_CREATE_ACTION:
        return 0;
      default:
        return create;
    }
  } catch (error) {}
};
export default Createreducers;
