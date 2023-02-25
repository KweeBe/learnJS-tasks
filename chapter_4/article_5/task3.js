function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt("новое число?", 0);
    }
}