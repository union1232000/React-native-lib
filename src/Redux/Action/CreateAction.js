export const DID_CREATE_ACTION = ' DID_CREATE_ACTION';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const CREATE_ERROR = 'CREATE_ERROR';
export const POST_CREATE = 'POST_CREATE';

export default createAction = (
  courseName,
  trainer,
  startedDate,
  endedDate,
  buildingId,
  roomId,
) => {
  return {
    type: POST_CREATE,
    data: {courseName, trainer, startedDate, endedDate, buildingId, roomId},
  };
};
