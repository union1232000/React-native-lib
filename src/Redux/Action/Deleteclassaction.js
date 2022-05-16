export const POST_DELETECLASS = 'POST_DELETECLASS';
export const DELETECLASS_SUCCESS = 'DELETECLASS_SUCCESS';
export const DELETECLASS_ERROR = 'DELETECLASS_ERROR';
export const DID_DELETECLASS_ACTION = ' DID_DELETECLASS_ACTION';

export const Deleteclassaction = () => {
  return {
    type: POST_DELETECLASS,
    data: classId,
  };
};
