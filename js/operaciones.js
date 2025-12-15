var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");

function calcular() {
console.log(n1.value);
console.log(n2.value);
let resultado = 0;
switch (document.getElementById("operacion").value) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    case "factorial":
        resultado = 1;
        for (let i = 1; i <= num1; i++) {
            resultado *= i;
        }    
        document.getElementById("resultado").innerHTML=resultado;
}
}