export const DID_EDITCOURSE_ACTION = ' DID_EDITCOURSE_ACTION';
export const EDITCOURSE_SUCCESS = 'EDITCOURSE_SUCCESS';
export const EDITCOURSE_ERROR = 'EDITCOURSE_ERROR';
export const POST_EDITCOURSE = 'POST_EDITCOURSE';

export default Editcourseaction = (
  courseId,
  courseName,
  trainer,
  startedDate,
  endedDate,
  buildingId,
  roomId,
) => {
  return {
    type: POST_EDITCOURSE,
    data: {
      courseId,
      courseName,
      trainer,
      startedDate,
      endedDate,
      buildingId,
      roomId,
    },
  };
};
