document.getElementById("btnCalcular").addEventListener("click", calcularTotal);

function calcularTotal() {
  const precio = Number(document.getElementById("producto").value);
  const cantidad = Number(document.getElementById("cantidad").value);
  const resultado = document.getElementById("resultado");

  if (precio === 0) {
    resultado.innerText = "Seleccione un producto";
    return;
  }

  const total = precio * cantidad;
  resultado.innerText = "Total a pagar: $" + total.toLocaleString();
}
