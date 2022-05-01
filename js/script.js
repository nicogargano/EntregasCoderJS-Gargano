//EJEMPLO FOR

let numero1 = parseInt(prompt("Ingrese el numero entero a multiplicar sucesivamente."));
let numero2 = parseInt(prompt("Ingrese el numero de veces que quiere que se multiplique."));
for (let i = 0; i <= numero2; i++) {
    console.log(numero1 + " x " + i + " = " + (numero1 * i));
}

//EJEMPLO WHILE

let item = prompt("Ingrese el item a agregar en la lista. (para finalizar tipear LISTO)");

while (item != "LISTO"){
    console.log(item + " Agregado.");
    item=prompt("Ingrese el item a agregar en la lista. (para finalizar tipear LISTO)");
}