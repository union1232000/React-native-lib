import {user} from '../Redux/Setting/Token';
export async function get_allclass() {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + user.token);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  var data;
  const response = await fetch(
    'http://10.86.224.37:5001/api/edu/get_class_by_course?courseId=627a080aad79820904dddb19',
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      data = result;
      console.log(result);
    })
    .catch(error => console.log('error', error));
  return data;
}
