let calculatro = {
    a : 0,
    b : 0,

    read(){
        this.a = +prompt("а?");
        this.b = +prompt("b?");
    },

    sum(){
        return this.a+this.b;
    },

    mul(){
        return this.a*this.b;
    }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );