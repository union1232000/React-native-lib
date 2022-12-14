import {user} from '../Redux/Setting/Token';
export async function postClass(data) {
  const {
    courseId,
    className,
    trainer,
    date,
    startedTime,
    endedTime,
    buildingId,
    roomId,
  } = data;

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${user.token}`);

  var raw = JSON.stringify({
    courseId: courseId,
    className: className,
    trainer: trainer,
    date: date,
    startedTime: startedTime,
    endedTime: endedTime,
    buildingId: buildingId,
    roomId: roomId,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  const response = await fetch(
    'http://118.69.123.51:5000/fis/api/edu/create_new_class',
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => console.log('error', error));
  return response;
}
