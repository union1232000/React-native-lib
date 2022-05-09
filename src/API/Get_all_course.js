import {user} from '../Redux/Setting/Token';
export async function get_allcourse() {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + user.token);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  var data;
  const response = await fetch(
    'http://10.86.224.37:5001/api/edu/get_all_course',
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      data = result;
      // console.log(result);
    })
    .catch(error => console.log('error', error));
  // console.log(data);
  return data;
}
