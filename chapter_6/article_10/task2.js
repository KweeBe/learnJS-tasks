function f() {
    alert(this.name);
  }
  
  f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );//нет не можем все равно выведиться Вася
  
  f();