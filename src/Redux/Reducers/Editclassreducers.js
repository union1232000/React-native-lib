import {
  EDITCLASS_ERROR,
  EDITCLASS_SUCCESS,
  DID_EDITCLASS_ACTION,
} from '../Action/Editclassaction';
const initialState = {
  Loa11111111ding: false,
};
const Editclassreducers = (Editclass = initialState, action) => {
  try {
    const response = action.response;
    switch (action.type) {
      case EDITCLASS_SUCCESS:
        return {...Editclass, response};
      case EDITCLASS_ERROR:
        return {...Editclass, response};
      case DID_EDITCLASS_ACTION:
        return 0;
      default:
        return Editclass;
    }
  } catch (error) {}
};
export default Editclassreducers;
