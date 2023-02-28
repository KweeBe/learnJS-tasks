function f() {
    alert( this ); // в консоле global в браузере object Window
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();