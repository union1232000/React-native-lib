import {
  DID_GETBUILDING_ACTION,
  GETBUILDING_SUCCESS,
  GETBUILDING_ERROR,
} from '../Action/Getbuilding';
const initialState = {
  Loa11111111ding: false,
};
const Getbuildingreducers = (Getbuilding = initialState, action) => {
  try {
    const response = action.response;
    switch (action.type) {
      case GETBUILDING_SUCCESS:
        return {...Getbuilding, response};
      case GETBUILDING_ERROR:
        return {...Getbuilding, response};
      case DID_GETBUILDING_ACTION:
        return 0;
      default:
        return Getbuilding;
    }
  } catch (error) {}
};
export default Getbuildingreducers;
