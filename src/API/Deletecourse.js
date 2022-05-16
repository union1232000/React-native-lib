import {user} from '../Redux/Setting/Token';
export const Deletecourse = course_id => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${user.token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return fetch(
    `http://118.69.123.51:5000/fis/api/edu/delete_course?courseId=${course_id}`,
    requestOptions,
  )
    .then(response => response.text())
    .then(result => {
      return result;
    })
    .catch(error => console.log('error', error));
};
