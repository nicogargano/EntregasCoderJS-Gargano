// function bienvenida() {

//     let nombre = prompt(
//         "Bienvenido al Gimnasio de Powerlifting!\nIngrese su nombre:"
//     );

//     while (nombre === "") {
//         nombre = prompt("Bienvenido al Gimnasio de Powerlifting!\nIngrese su nombre:");
//     }
//     return nombre;
// }

// function elegirMembresia() {

//     let producto = prompt("Que Membresia le interesa?\n1)Semanal.\n2)Mensual.\n3)Anual.");

//     while (producto !== "1" && producto !== "2" && producto !== "3" && producto !== "Semanal" && producto !== "Mensual" && producto !== "Anual" && producto !== "semanal" && producto !== "mensual" && producto !== "anual") {
//         producto = prompt("Que Membresia le interesa?\n1)Semanal.\n2)Mensual.\n3)Anual.");
//     }

//     if (producto === "1" || producto === "Semanal" || producto === "semanal") {
//         return "Semanal";
//     } else if (producto === "2" || producto === "Mensual" || producto === "mensual") {
//         return "Mensual";
//     } else {
//         return "Anual";
//     }
// }

// function pagarMembresia(cliente, producto) {

//     switch (producto) {
//         case "Semanal":
//             alert("El valor a abonar es de $ 1000.\nSelecciono: " + producto + ".");
//             break;
//         case "Mensual":
//             alert("El valor a abonar es de $ 3500.\nDe regalo primer semana de personalizado!\nSelecciono: " + producto + ".");
//             break;
//         case "Anual":
//             alert("El valor a abonar es de $ 30000.\nDe regalo un mes a elegir de personalizado!\nSelecciono: " + producto + ".");
//             break;
//     }

//     alert("Muchas Gracias por elegirnos " + cliente + "!");
// }

// let nombreCliente = bienvenida();
// let productoElejido = elegirMembresia();
// pagarMembresia(nombreCliente, productoElejido);

class membresia {
    constructor(tipo, precio, detalle, cupo) {
        this.tipo = tipo;
        this.precio = parseInt(precio);
        this.detalle = detalle;
        this.cupo = parseInt(cupo);
    }
}

const arrayMembresias = [];
let comprobacion
do {
    comprobacion = prompt("Ingrese la Membresia a agregar, cuando termine ingrese 'fin'.");
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin") {
        break;
    } else {
        tipoM = comprobacion;
        let precioM = prompt("Ingrese el valor de la Membresia.");
        let detalleM = prompt("Ingrese la descripcion de la Membresia.");
        let cupoM = prompt("Ingrese el cupo de la Membresia.");
        arrayMembresias.push(new membresia(tipoM, precioM, detalleM, cupoM));
    }
    console.log(comprobacion);
} while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin");

console.log(arrayMembresias);

// MEMBRESIAS

for (let membresia of arrayMembresias) {
    document.write("<h3>" + membresia.tipo + "</h3>");
    document.write("<li>Precio: " + membresia.precio + "</li>");
    document.write("<li>Detalle: " + membresia.detalle + "</li>");
    document.write("<li>Cupo: " + membresia.cupo + "</li>");
    console.log(membresia.tipo);
    console.log(membresia.precio);
    console.log(membresia.detalle);
    console.log(membresia.cupo);
}

// SI TENGO MENOS DE 5 CUPOS EN ALGUNA MEMBRESIA

let pocosCupos = arrayMembresias.filter(membresia => membresia.cupo <= 5);
console.log(("Membresias con pocos cupos, reorganizar!"));
console.log(pocosCupos);
document.write("<h2> Las siguientes Membresias tienen menos de 5 cupos: </h2>");

for (let membresia of pocosCupos) {
    document.write("<h3>" + membresia.tipo + "</h3>");
    document.write("<li>Detalle: " + membresia.detalle + "</li>");
    document.write("<li>CUPOS: " + membresia.cupo + "</li>");
}

//MEMBRESIA SIN CUPO

let noCupo = arrayMembresias.filter(membresia => membresia.cupo == 0);
console.log(("Hay membresias sin cupos, reorganizar ya!"));
console.log(noCupo);
document.write("<h2> Las siguientes Membresias no tiene cupo: </h2>");

for (let membresia of noCupo) {
    document.write("<h3>" + membresia.tipo + "</h3>");
    document.write("<li>Detalle: " + membresia.detalle + "</li>");
    document.write("<li>CUPOS: " + membresia.cupo + "</li>");
}

//BUSCAR UNA MEMBRESIA POR TIPO

let ingresado = prompt("Ingresar la membresia que necesita encontrar: ");
let membIngresada = arrayMembresias.filter(membresia => membresia.tipo.includes(ingresado));
console.log(membIngresada);
document.write("<h2> Lista de Membresias que corresponen a tu busqueda: </h2>");

for (let membresia of membIngresada) {
    document.write("<h3>" + membresia.tipo + "</h3>");
    document.write("<li>Detalle: " + membresia.detalle + "</li>");
    document.write("<li>Precio: " + membresia.precio + "</li>");
}

//ORDENAR POR CUPOS

let ordenaCupos = [];
ordenaCupos = arrayMembresias.map(elemento => elemento);
ordenaCupos.sort(function(a,b){
    return a.cupo - b.cupo;
});
console.log("Ordenados por cantidad de cupos")
console.log(ordenaCupos);
document.write("<h2> Orden de Membresias segun sus cupos: </h2>")

for (let membresia of ordenaCupos) {
    document.write("<h3>" + membresia.tipo + "</h3>");
    document.write("<li>Detalle: " + membresia.detalle + "</li>");
    document.write("<li>CUPOS: " + membresia.cupo + "</li>");
}

//ORDENAR POR VALOR

let ordenaPrecio = [];
ordenaPrecio = arrayMembresias.map(elemento => elemento);
ordenaPrecio.sort(function(a,b){
    return a.precio - b.precio;
});
console.log("Ordenados por valor de la Membresia")
console.log(ordenaPrecio);
document.write("<h2> Orden de Membresias segun sus precios: </h2>")

for (let membresia of ordenaPrecio) {
    document.write("<h3>" + membresia.tipo + "</h3>");
    document.write("<li>Detalle: " + membresia.detalle + "</li>");
    document.write("<li>Precio: " + membresia.precio + "</li>");
}

