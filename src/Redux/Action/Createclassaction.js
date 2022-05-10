export const DID_CREATECLASS_ACTION = ' DID_CREATECLASS_ACTION';
export const CREATECLASS_SUCCESS = 'CREATECLASS_SUCCESS';
export const CREATECLASS_ERROR = 'CREATECLASS_ERROR';
export const POST_CREATECLASS = 'POST_CREATECLASS';

export default createclass = (
  courseId,
  className,
  trainer,
  date,
  startedTime,
  endedTime,
  buildingId,
  roomId,
) => {
  console.log('action chạy rồi nè bro');
  return {
    type: POST_CREATECLASS,
    data: {
      courseId,
      className,
      trainer,
      date,
      startedTime,
      endedTime,
      buildingId,
      roomId,
    },
  };
};
