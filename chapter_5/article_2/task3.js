function readNumber(){
    let number;

    do{
        number = prompt("Число?");
    }while(!isFinite(number));

    if(number === null || number === '') return null;
}

alert(`Число - ${readNumber()}`);