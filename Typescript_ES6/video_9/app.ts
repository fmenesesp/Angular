//Tipos de interfaces

//Camelcase
interface Xmen {
    nombre:string,
    poder:string
}


//function enviarMision(xmen: {nombre:string})
function enviarMision(xmen:Xmen){
    console.log("Enviado a: " + xmen.nombre);
}


function enviarCuartel(xmen:Xmen){
    console.log("Enviado a cuartel: " + xmen.nombre);
}

let wolverineXforce:Xmen = {
    nombre: "Logan",
    poder: "Regeneración"
};

enviarMision(wolverineXforce);
enviarCuartel(wolverineXforce);