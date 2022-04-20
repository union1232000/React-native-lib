import {useSelector} from 'react-redux';
import {token} from '../Redux/Setting/Token';

export async function postCreate(Create) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer' + token);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    courseName,
    trainer,
    startedDate,
    endedDate,
    buildingId,
    roomId,
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
