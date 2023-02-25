
function Calculator(){
    this.a = 0;
    this.b = 0;

    this.read = function(){
        this.a = +prompt("а?");
        this.b = +prompt("b?");
    };

    this.sum = function(){
        return this.a+this.b;
    };

    this.mul = function(){
        return this.a*this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );