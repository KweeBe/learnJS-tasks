let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

// в 1 и 2 возвращает не точное значение свойства, 
// а специальное значение «ссылочного типа» и 
// идет обычный вызов с ипользованием this

// для 3 и 4 идет потеря this