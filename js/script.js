//SETEO DE MEMBRESIAS

let boton6 = document.getElementById("b6");
boton6.onclick = () => {
    window.location.href="./pages/seteo.html";
}

class membresia {
    constructor(tipo, precio, detalle, cupo) {
        this.tipo = tipo;
        this.precio = parseInt(precio);
        this.detalle = detalle;
        this.cupo = parseInt(cupo);
    }
}

const element = document.getElementById("bEnviar");
element.addEventListener("click", agregar);

const tipoM = document.getElementById("validationCustom01")
const precioM = document.getElementById("validationCustom02")
const cupoM = document.getElementById("validationCustom03")
const detalleM = document.getElementById("validationTextarea.value")

function agregar() {
    const arrayMembresias = [];
    let tipoM = validationCustom01.value;
    let precioM = validationCustom02.value;
    let detalleM = validationTextarea.value;
    let cupoM = validationCustom03.value;
    arrayMembresias.push(new membresia(tipoM, precioM, detalleM, cupoM));
    console.log(arrayMembresias);
}

//BUSCAR UNA MEMBRESIA POR TIPO

const btnBuscar = document.querySelector("#b5");
btnBuscar.addEventListener("click", () => {

    let busqueda = document.getElementById("busqueda");
    let listaBusqueda = document.createElement("div");

    let membIngresada = arrayMembresias.filter(membresia => membresia.tipo.includes(bMembresia.value));
    console.log(membIngresada);

    busqueda.innerHTML = "<h2> Lista de Membresias que corresponen a tu busqueda: </h2>"

    membIngresada.forEach(p => {
        let h3 = document.createElement("h3");
        let li = document.createElement("li");

        h3.innerText = p.tipo;

        li = document.createElement("li");
        li.innerText = p.detalle;
        h3.appendChild(li);

        li = document.createElement("li");
        li.innerText = p.precio;
        h3.appendChild(li);

        li = document.createElement("li");
        li.innerText = p.cupo;
        h3.appendChild(li);

        listaBusqueda.appendChild(h3)
    });

    busqueda.appendChild(listaBusqueda);

});

// MEMBRESIAS

let tabla = document.getElementById("tMembresias");
let cuerpoTabla = document.createElement("tbody");

arrayMembresias.forEach(p => {
    let fila = document.createElement("tr");
    let td = document.createElement("td");

    td.innerText = p.tipo;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.detalle;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.precio;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.cupo;
    fila.appendChild(td);

    cuerpoTabla.appendChild(fila)
});

tabla.appendChild(cuerpoTabla);

// SI TENGO MENOS DE 5 CUPOS EN ALGUNA MEMBRESIA

let boton1 = document.getElementById("b1");
boton1.onclick = () => {

    let data5 = document.getElementById("data5");
    let listaData5 = document.createElement("div")

    let pocosCupos = arrayMembresias.filter(membresia => membresia.cupo <= 5);
    console.log(("Membresias con pocos cupos, reorganizar!"));
    console.log(pocosCupos);
    data5.innerHTML = "<h2> Las siguientes Membresias tienen menos de 5 cupos: </h2>";

    pocosCupos.forEach(p => {
        let h3 = document.createElement("h3");
        let li = document.createElement("li");

        h3.innerText = p.tipo;

        li = document.createElement("li");
        li.innerText = p.detalle;
        h3.appendChild(li);

        li = document.createElement("li");
        li.innerText = p.precio;
        h3.appendChild(li);

        li = document.createElement("li");
        li.innerText = p.cupo;
        h3.appendChild(li);

        listaData5.appendChild(h3)
    });

    data5.appendChild(listaData5);

}

//MEMBRESIA SIN CUPO

let boton2 = document.getElementById("b2");
boton2.onclick = () => {

    let data0 = document.getElementById("data0");
    let listaData0 = document.createElement("div");

    let noCupo = arrayMembresias.filter(membresia => membresia.cupo == 0);
    console.log(("Hay membresias sin cupos, reorganizar ya!"));
    console.log(noCupo);
    data0.innerHTML = "<h2> Las siguientes Membresias no tiene cupo: </h2>";

    noCupo.forEach(p => {
        let h3 = document.createElement("h3");
        let li = document.createElement("li");

        h3.innerText = p.tipo;

        li = document.createElement("li");
        li.innerText = p.detalle;
        h3.appendChild(li);

        li = document.createElement("li");
        li.innerText = p.precio;
        h3.appendChild(li);

        li = document.createElement("li");
        li.innerText = p.cupo;
        h3.appendChild(li);

        listaData0.appendChild(h3)
    });

    data0.appendChild(listaData0);

}

//ORDENAR POR CUPOS

let boton3 = document.getElementById("b3");
boton3.onclick = () => {

    let oCupo = document.getElementById("oCupo");
    let listaCupo = document.createElement("div");

    let ordenaCupos = [];
    ordenaCupos = arrayMembresias.map(elemento => elemento);
    ordenaCupos.sort(function (a, b) {
        return a.cupo - b.cupo;
    });
    console.log("Ordenados por cantidad de cupos")
    console.log(ordenaCupos);
    oCupo.innerHTML = "<h2> Orden de Membresias segun sus cupos: </h2>";

    ordenaCupos.forEach(p => {
        let h3 = document.createElement("h3");
        let li = document.createElement("li");

        h3.innerText = p.tipo;

        li = document.createElement("li");
        li.innerText = p.detalle;
        h3.appendChild(li);

        li = document.createElement("li");
        li.innerText = p.precio;
        h3.appendChild(li);

        li = document.createElement("li");
        li.innerText = p.cupo;
        h3.appendChild(li);

        listaCupo.appendChild(h3)
    });

    oCupo.appendChild(listaCupo);

}

//ORDENAR POR VALOR

let boton4 = document.getElementById("b4");
boton4.onclick = () => {

    let oPrecio = document.getElementById("oPrecio");
    let listaPrecio = document.createElement("div");

    let ordenaPrecio = [];
    ordenaPrecio = arrayMembresias.map(elemento => elemento);
    ordenaPrecio.sort(function (a, b) {
        return a.precio - b.precio;
    });
    console.log("Ordenados por valor de la Membresia")
    console.log(ordenaPrecio);
    oPrecio.innerHTML = "<h2> Orden de Membresias segun sus precios: </h2>";

    ordenaPrecio.forEach(p => {
        let h3 = document.createElement("h3");
        let li = document.createElement("li");

        h3.innerText = p.tipo;

        li = document.createElement("li");
        li.innerText = p.detalle;
        h3.appendChild(li);

        li = document.createElement("li");
        li.innerText = p.precio;
        h3.appendChild(li);

        li = document.createElement("li");
        li.innerText = p.cupo;
        h3.appendChild(li);

        listaPrecio.appendChild(h3)
    });

    oPrecio.appendChild(listaPrecio);

}