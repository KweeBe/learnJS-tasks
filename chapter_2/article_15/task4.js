// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(x,n)
{
    return x**n;
}

let x = prompt("Введите число x");
let n = prompt("Введите степень n");

if(n < 1)
{
    alert("Степень не поддерживается, используйте натуральное число");
}
else
{
    alert(pow(x,n));
}