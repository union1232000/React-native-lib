import {
  DID_GETALLCLASS_ACTION,
  GETALLCLASS_SUCCESS,
  GETALLCLASS_ERROR,
} from '../Action/GetclassAction.js';
const initialState = {
  Loa11111111ding: false,
};
const Getallclassreducers = (Getallclass = initialState, action) => {
  try {
    const response = action.response;
    switch (action.type) {
      case GETALLCLASS_SUCCESS:
        return {...Getallclass, response};
      case GETALLCLASS_ERROR:
        return {...Getallclass, response};
      case DID_GETALLCLASS_ACTION:
        return 0;
      default:
        return Getallclass;
    }
  } catch (error) {}
};
export default Getallclassreducers;
