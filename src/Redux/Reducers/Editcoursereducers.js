import {
  EDITCOURSE_ERROR,
  EDITCOURSE_SUCCESS,
  DID_EDITCOURSE_ACTION,
} from '../Action/Editcourseaction';
const initialState = {
  Loa11111111ding: false,
};
const Editcoursereducers = (Editcourse = initialState, action) => {
  try {
    const response = action.response;
    switch (action.type) {
      case EDITCOURSE_SUCCESS:
        return {...Editcourse, response};
      case EDITCOURSE_ERROR:
        return {...Editcourse, response};
      case DID_EDITCOURSE_ACTION:
        return 0;
      default:
        return Editcourse;
    }
  } catch (error) {}
};
export default Editcoursereducers;
