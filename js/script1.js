//SETEO DE MEMBRESIAS

let btnF = document.getElementById("bFin");
btnF.onclick = () => {
    window.location.href = "../index.html";
}

let btnE = document.getElementById("bEnviar");
let tipo = document.getElementById("tipo");
let precio = document.getElementById("precio");
let cupo = document.getElementById("cupo");
let detalle = document.getElementById("detalle");
p = document.querySelector("p")
const array = [];

btnE.addEventListener("click", (e) => {
    e.preventDefault();

    let membresia = {
        tipo: tipo.value,
        precio: precio.value,
        detalle: detalle.value,
        cupo: cupo.value
    }

    if (membresia.tipo == "" || membresia.preciM == "" || membresia.detalle == "" || membresia.cupo == "") {
        p.innerText = "Campos vacios!";
        return;
    } else {
        array.push(membresia);
        localStorage.setItem("item", JSON.stringify(array));
        tipo.value = ""
        precio.value = ""
        detalle.value = ""
        cupo.value = ""
        p.innerText = "Guardado con exito!"
    }
    return membresia;
});