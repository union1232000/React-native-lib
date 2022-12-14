import {user} from '../Redux/Setting/Token';
export const Deleteclass = data => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${user.token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return fetch(
    `http://118.69.123.51:5000/fis/api/edu/delete_class?classId=${data}`,
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => console.log('error', error));
};
