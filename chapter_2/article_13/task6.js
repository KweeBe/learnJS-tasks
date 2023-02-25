"use strict"

let otv;
while(true)
{
    otv = prompt("Введите число больше 100", '');
    if(otv != '' && otv > 100)
    {
        alert("Верно");
        break;
    }
}


