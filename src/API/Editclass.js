import {user} from '../Redux/Setting/Token';

export async function Editclass(data) {
  const {
    classId,
    className,
    trainer,
    date,
    startedTime,
    endedTime,
    buildingId,
    roomId,
  } = data;
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${user.token}`);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    classId: classId,
    className: className,
    trainer: trainer,
    date: date,
    startedTime: startedTime,
    endedTime: endedTime,
    buildingId: buildingId,
    roomId: roomId,
  });
  console.log('Api thật ngu');
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(
    'http://118.69.123.51:5000/fis/api/edu/edit_class',
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => console.log('error', error));
  return response;
}
