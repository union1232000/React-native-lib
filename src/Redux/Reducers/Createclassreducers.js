import {
  DID_CREATECLASS_ACTION,
  CREATECLASS_SUCCESS,
  CREATECLASS_ERROR,
} from '../Action/Createclassaction';
const initialState = {
  Loa11111111ding: false,
};

const Createclassreducers = (createclass = initialState, action) => {
  try {
    const response = action.response;
    switch (action.type) {
      case CREATECLASS_SUCCESS:
        return {...createclass, response};
      case CREATECLASS_ERROR:
        return {...createclass, response};
      case DID_CREATECLASS_ACTION:
        return 0;
      default:
        return createclass;
    }
  } catch (error) {}
};
export default Createclassreducers;
