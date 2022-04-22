export async function postLogin(user, password) {
  let data = {
    username: user,
    password: password,
  };
  const reponse = await fetch('http://118.69.123.51:5000/fis/api/login', {
    method: 'POST', // phương thức
    headers: {
      Accept: ',application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(reponse => reponse.json())
    .catch(error => {
      console.error(error);
    });
  return reponse;
}
