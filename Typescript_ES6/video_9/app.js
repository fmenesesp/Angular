"use strict";
//Tipos de interfaces
//function enviarMision(xmen: {nombre:string})
function enviarMision(xmen) {
    console.log("Enviado a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviado a cuartel: " + xmen.nombre);
}
var wolverineXforce = {
    nombre: "Logan",
    poder: "Regeneración"
};
enviarMision(wolverineXforce);
enviarCuartel(wolverineXforce);
