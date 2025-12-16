function cargarAprendices() {

    var option = document.getElementById("Ficha").value;

    var ficha = option.substring(0, 7).trim();

    var carga = new XMLHttpRequest();

    carga.open("GET", ficha+".txt", true);

    carga.onreadystatechange = function() {

        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("listaAprendices").innerHTML =
                getFilasAprendices(this.responseText);

        } else if (this.readyState === 4 && this.status === 404) {
            alert("No se enconteron aprendices para la ficha seleccionada");
            document.getElementById("listaAprendices").innerHTML = "";
            
        };
    }

    carga.send();
}

function getFilasAprendices(cadena) {

    var filas = "";

    var aprendices = cadena.split("\n");


    for (let i=0; i < aprendices.length; i++) {
        filas += "<tr><td>" + aprendices[i] + "</td><td><input type='checkbox' name='aprendiz[]' value='" + aprendices[i] + "'/></td></tr>";
    }

    return filas;
}


function cargarfichas() {

    var carga = new XMLHttpRequest();

    carga.open("GET", "fichas.txt", true);

    carga.onreadystatechange = function() {

        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("Ficha").innerHTML
            "coption>Seleccione una ficha</option></br>" + this.responseText;
        };
    }

    carga.send();
}