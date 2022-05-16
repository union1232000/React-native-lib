export const POST_DELETECOURSE = 'POST_DELETECOURSE';
export const DELETECOURSE_SUCCESS = 'DELETECOURSE_SUCCESS';
export const DELETECOURSE_ERROR = 'DELETECOURSE_ERROR';
export const DID_DELETECOURSE_ACTION = ' DID_DELETECOURSE_ACTION';

export const Deletecourseaction = () => {
  return {
    type: POST_DELETECOURSE,
    data: courseId,
  };
};
