export const POST_GETALLCLASS = 'POST_GETALLCLASS';
export const GETALLCLASS_SUCCESS = 'GETALLCLASS_SUCCESS';
export const GETALLCLASS_ERROR = 'GETALLCLASS_ERROR';
export const DID_GETALLCLASS_ACTION = ' DID_GETALLCLASS_ACTION';

export const get_allclassaction = data => {
  return {
    type: POST_GETALLCLASS,
    data: data,
  };
};
