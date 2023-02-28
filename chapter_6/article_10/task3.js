function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  alert( bound.test ); // undefined 
  //т.к. мы создали новый обьект у которого нет свойства test