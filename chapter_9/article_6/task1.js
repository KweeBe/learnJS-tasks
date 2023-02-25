function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
//так как мы изминили prototype в обоих функциях
//в действительности определяет тип, а не функция-конструктор.