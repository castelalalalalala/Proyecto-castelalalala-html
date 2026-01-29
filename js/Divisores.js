document.getElementById("btnCalcular").addEventListener("click", mostrarDivisor);

function obtenerDivisores(numero) {
let Divisores = [];
for (let i = 1; i<=numero; i++) {
    if (numero % i === 0) {
        Divisores.push(i);
    }
}
return Divisores;
}

function mostrarDivisor() {
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);

if (isNaN(numero1) || isNaN(numero2)) {
    document.getElementById("resultado").innerText = "Por favor ingrese numeros validos";
    return;
}

let divisores1 = obtenerDivisores(numero1);
let divisores2 = obtenerDivisores(numero2);

document.getElementById("resultado").innerText = "Los divisores de " + numero1 + " son: " + divisores1.join(", ") + "\n" +
"Los divisores de " + numero2 + " son: " + divisores2.join(", ");

}