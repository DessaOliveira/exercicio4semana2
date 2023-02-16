localStorage.setItem('username', 'Andressa');

let username = localStorage.getItem('username');
console.log(username);

localStorage.removeItem('username');
console.log(username);

localStorage.setItem('username', 'Laura');
console.log(username);


localStorage.setItem('email', 'andressa@hotdog.com');

let useremail = localStorage.getItem('email');
console.log(useremail);

localStorage.removeItem('email');
console.log(useremail);

localStorage.setItem('useremail', 'laura@hotdog.com');
console.log(useremail);
