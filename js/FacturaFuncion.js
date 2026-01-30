let productos = [];

window.onload = function () {
    fetch("Productos.txt")
    .then(res => res.text())
    .then(data => {
        let lineas = data.trim().split("\n");
        lineas.forEach(l => {
            let c = l.split(",");
            productos.push({
                codigo: c[0],
                nombre: c[1],
                precio: parseFloat(c[2])
            });
        });
    });
};

document.getElementById("btnAddProducto").addEventListener("click", addFila);

function addFila() {
    var tabla = document.getElementById("Tabla").getElementsByTagName("tbody")[0];
    var fila = tabla.insertRow(-1);

    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    var celda5 = fila.insertCell(4);
    var celda6 = fila.insertCell(5);

    celda1.innerHTML = `
        <select onchange="cargarPorCodigo(this)">
            <option value="">--Codigo--</option>
        </select>
    `;

    celda2.innerHTML = `<input type="text" readonly>`;
    celda3.innerHTML = `<input type="number" min="1" value="1" oninput="calcular(this)">`;
    celda4.innerHTML = `<input type="number" readonly>`;
    celda5.innerHTML = `<span>0</span>`;
    celda6.innerHTML = `<span>0</span>`;

    let select = celda1.children[0];
    productos.forEach(p => {
        let opt = document.createElement("option");
        opt.value = p.codigo;
        opt.textContent = p.codigo;
        select.appendChild(opt);
    });
}

function cargarPorCodigo(select) {
    let fila = select.parentElement.parentElement;
    let prod = productos.find(p => p.codigo === select.value);

    if (prod) {
        fila.cells[1].children[0].value = prod.nombre;
        fila.cells[3].children[0].value = prod.precio;
        calcular(fila.cells[2].children[0]);
    }
}

function calcular(input) {
    let fila = input.parentElement.parentElement;
    let cantidad = parseFloat(fila.cells[2].children[0].value) || 0;
    let precio = parseFloat(fila.cells[3].children[0].value) || 0;

    let subtotal = cantidad * precio;
    fila.cells[4].innerText = subtotal;

    actualizarTotal();
}

function actualizarTotal() {
    let filas = document.querySelectorAll("#Tabla tbody tr");
    let total = 0;

    filas.forEach(f => {
        let sub = parseFloat(f.cells[4].innerText) || 0;
        total += sub;
        f.cells[5].innerText = total;
    });
}