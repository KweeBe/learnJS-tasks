
//работает
function User(name) {
    this.name = name;
  }
  
  let user3 = new User('John');
  let user4 = new user3.constructor('Pete');

  console.log( user4.name ); 


//не работает
// function User(name) {
//     this.name = name;
//   }
  User.prototype = {}; 
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  console.log( user2.name );
