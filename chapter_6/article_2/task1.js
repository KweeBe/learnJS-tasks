//3
function sumTo(num){
    return num === 1 ? 1 : num + sumTo(num-1);
}

//2
function sumTo(num){
    let otv = num;
    for(let i = 0; i< num; i++){
        otv +=i;
    }
    return otv;
}

//1
function sumTo(num) {
    return num * (num + 1) / 2;
}


console.log(sumTo(100));