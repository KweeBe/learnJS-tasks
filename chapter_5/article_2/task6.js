alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5

function randomInteger(min, max){
    return Math.round(min - 0.5 + Math.random() * (max-min + 1));
}