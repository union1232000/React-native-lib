import {useTransition} from 'react';
import {useSelector} from 'react-redux';
import {user} from '../Redux/Setting/Token';

export async function postCreate(Create) {
  const {courseName, trainer, startedDate, endedDate, buildingId, roomId} =
    Create;
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${user}`);
  console.log(' đưa ra cái token ngu loz', user);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    courseName: courseName,
    trainer: trainer,
    startedDate: startedDate,
    endedDate: endedDate,
    buildingId: buildingId,
    roomId: roomId,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://10.86.224.37:5001/api/edu/create_new_course', requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  return Create;
}
