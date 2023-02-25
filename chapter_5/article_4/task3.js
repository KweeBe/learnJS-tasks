let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
// a, b, function() {alert( this );}
//т.к. вызываем функцию в которой вывод массива