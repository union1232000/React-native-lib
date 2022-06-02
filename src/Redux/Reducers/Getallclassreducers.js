import {
  DID_GETALLCLASS_ACTION,
  GETALLCLASS_SUCCESS,
  GETALLCLASS_ERROR,
  POST_GETALLCLASS,
} from '../Action/GetclassAction.js';
const initialState = {
  Loa11111111ding: false,
  loading: false,
};
const Getallclassreducers = (Getallclass = initialState, action) => {
  try {
    const response = action.response;
    switch (action.type) {
      case POST_GETALLCLASS:
        return {loading: true};
      case GETALLCLASS_SUCCESS:
        return {...Getallclass, response, loading: false};
      case GETALLCLASS_ERROR:
        return {...Getallclass, response, loading: false};
      case DID_GETALLCLASS_ACTION:
        return 0;
      default:
        return Getallclass;
    }
  } catch (error) {}
};
export default Getallclassreducers;
