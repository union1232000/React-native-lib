import {user} from '../Redux/Setting/Token';
export async function get_building() {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + user.token);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const response = await fetch(
    'http://118.69.123.51:5000/fis/api/edu/get_building',
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => console.log('error12312312', error));

  return response;
}
