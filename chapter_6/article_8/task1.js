function printNumbers(from, to){
    let i=from;
    let timer = setInterval(() => {
        console.log(i);
        if(i==to) clearInterval(timer);
        i++;
    }, 1000);
}

function printNumbers(from, to){
    let i=from;
    setTimeout(function f(){
        console.log(i);
        if(i!=to) setTimeout(f,1000);
        i++;
    }, 1000);
}

printNumbers(5,15);