import {user} from '../Redux/Setting/Token';
export async function get_allclass() {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${user.token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  var data;
  const response = await fetch(
    'http://118.69.123.51:5000/fis/api/edu/get_class_by_course?courseId=627b967fad79820904dddc15',
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
