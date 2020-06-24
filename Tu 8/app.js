const http = new EasyHTTP();

// // Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

// Post Users

const data = {name: 'Fitsum Alemu',username:'ftmm',email:'ft@gmail.com'}
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

// http.update('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(msg=>console.log(msg))
.catch(err=>console.log(err));