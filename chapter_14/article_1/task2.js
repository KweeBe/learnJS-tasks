let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver){
        if(prop < 0){
            return Reflect.get(target, +target.length + +prop, receiver);
        }
        else{
            return Reflect.get(target, prop, receiver);
        }
    }
});

console.log(array[-1]); // 3, последний элемент
console.log(array[-2]); // 2, предпоследний элемент
console.log(array[-3]); // 1, за два элемента до последнего