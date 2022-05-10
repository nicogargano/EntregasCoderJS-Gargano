function bienvenida() {

    let nombre = prompt(
        "Bienvenido al Gimnasio de Powerlifting!\nIngrese su nombre:"
    );

    while (nombre === "") {
        nombre = prompt("Bienvenido al Gimnasio de Powerlifting!\nIngrese su nombre:");
    }
    return nombre;
}

function elegirMembresia() {

    let producto = prompt("Que Membresia le interesa?\n1)Semanal.\n2)Mensual.\n3)Anual.");

    while (producto !== "1" && producto !== "2" && producto !== "3" && producto !== "Semanal" && producto !== "Mensual" && producto !== "Anual" && producto !== "semanal" && producto !== "mensual" && producto !== "anual") {
        producto = prompt("Que Membresia le interesa?\n1)Semanal.\n2)Mensual.\n3)Anual.");
    }

    if (producto === "1" || producto === "Semanal" || producto === "semanal") {
        return "Semanal";
    } else if (producto === "2" || producto === "Mensual" || producto === "mensual") {
        return "Mensual";
    } else {
        return "Anual";
    }
}

function pagarMembresia(cliente, producto) {

    switch (producto) {
        case "Semanal":
            alert("El valor a abonar es de $ 1000.\nSelecciono: " + producto + ".");
            break;
        case "Mensual":
            alert("El valor a abonar es de $ 3500.\nDe regalo primer semana de personalizado!\nSelecciono: " + producto + ".");
            break;
        case "Anual":
            alert("El valor a abonar es de $ 30000.\nDe regalo un mes a elegir de personalizado!\nSelecciono: " + producto + ".");
            break;
    }

    alert("Muchas Gracias por elegirnos " + cliente + "!");
}

let nombreCliente = bienvenida();
let productoElejido = elegirMembresia();
pagarMembresia(nombreCliente, productoElejido);