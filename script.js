let current = JSON.parse(localStorage.getItem('currentUser'));
console.log(current);




let users = JSON.parse(localStorage.getItem('users'));

let filter = users.filter(user => user.username === current.username);

var balance = filter[0].balance;






// USER ID AND PASSWORD VERIFICTION

function verifyUser(username, password) {

  if (current.username === username && current.password === password) {
    console.log("valid")
    return true;
  
    
  } else {
    console.log("invalid");
    
    return false;
  }

  

 
}













