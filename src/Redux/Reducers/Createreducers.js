import {
  CREATE_ERROR,
  CREATE_SUCCESS,
  DID_CREATE_ACTION,
} from '../Action/CreateAction';
const initialState = {
  Loa11111111ding: false,
};
const Createreducers = (create = initialState, action) => {
  console.log('redu chạy rồi nè bro');

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
