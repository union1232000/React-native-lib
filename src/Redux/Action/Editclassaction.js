export const DID_EDITCLASSS_ACTION = ' DID_EDITCLASSS_ACTION';
export const EDITCLASS_SUCCESS = 'EDITCLASSS_SUCCESS';
export const EDITCLASS_ERROR = 'EDITCLASSS_ERROR';
export const POST_EDITCLASSS = 'POST_EDITCLASSS';

export default Editclasssaction = (
  classId,
  className,
  trainer,
  date,
  startedTime,
  endedTime,
  buildingId,
  roomId,
) => {
  return {
    type: POST_EDITCLASSS,
    data: {
      classId,
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
