import {
  DID_GETALLCOURSE_ACTION,
  GETALLCOURSE_SUCCESS,
  GETALLCOURSE_ERROR,
} from '../Action/GetallcourseAction';
const initialState = {
  Loa11111111ding: false,
};
const Getallcoursereducers = (Getallcourse = initialState, action) => {
  try {
    const response = action.response;
    switch (action.type) {
      case GETALLCOURSE_SUCCESS:
        return {...Getallcourse, response};
      case GETALLCOURSE_ERROR:
        return {...Getallcourse, response};
      case DID_GETALLCOURSE_ACTION:
        return 0;
      default:
        return Getallcourse;
    }
  } catch (error) {}
};
export default Getallcoursereducers;
