import { Alert } from "react-native";

export const postLogin = data => {
  const {user, password} = data;
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    username: user,
    password: password,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return fetch('http://118.69.123.51:5000/fis/api/login', requestOptions)
    .then(response => response.json())
    .then(result => {
      Alert.alert('API Ngu đăng nhập dc r')
      return result;
    })
    .catch(error => Alert.alert(`cái error ngu ${error}`));
};  
