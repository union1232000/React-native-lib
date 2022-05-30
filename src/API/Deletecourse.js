import {user} from '../Redux/Setting/Token';
export async function Deletecourse(courseId) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${user.token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const response = await fetch(
    `http://118.69.123.51:5000/fis/api/edu/delete_course?courseId=${courseId}`,
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => console.log('error', error));
  return response;
}
