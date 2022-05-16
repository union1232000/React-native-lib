import {
  DID_DELETECOURSE_ACTION,
  DELETECOURSE_SUCCESS,
  DELETECOURSE_ERROR,
} from '../Action/Deletecourseaction';
const initialState = {
  Loa11111111ding: false,
};
const Deletecoursereducers = (Deletecourse = initialState, action) => {
  try {
    const response = action.response;
    switch (action.type) {
      case DELETECOURSE_SUCCESS:
        return {...Deletecourse, response};
      case DELETECOURSE_ERROR:
        return {...Deletecourse, response};
      case DID_DELETECOURSE_ACTION:
        return 0;
      default:
        return Deletecourse;
    }
  } catch (error) {}
};
export default Deletecoursereducers;
