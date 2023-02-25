function sumInput(){
    let nums = [];

    while(true){
        let num = prompt("Введите число", 0);

        if( num === "" || num === null || !isFinite(num)) break;
        nums.push(num);
    }

    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += +nums[i];
    }
    return sum;
}

alert(sumInput());