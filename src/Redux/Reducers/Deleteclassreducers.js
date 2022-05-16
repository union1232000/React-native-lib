import {
  DID_DELETECLASS_ACTION,
  DELETECLASS_SUCCESS,
  DELETECLASS_ERROR,
} from '../Action/Deleteclassaction';
const initialState = {
  Loa11111111ding: false,
};
const Deleteclassreducers = (Deleteclass = initialState, action) => {
  try {
    const response = action.response;
    switch (action.type) {
      case DELETECLASS_SUCCESS:
        return {...Deleteclass, response};
      case DELETECLASS_ERROR:
        return {...Deleteclass, response};
      case DID_DELETECLASS_ACTION:
        return 0;
      default:
        return Deleteclass;
    }
  } catch (error) {}
};
export default Deleteclassreducers;
