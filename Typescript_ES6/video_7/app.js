"use strict";
var avenger = {
    nombreAvenger: "Steve",
    claveAvenger: "Capitan America",
    poderAvenger: "Droga"
};
//NO podemos dar tipos de datos, pero si alias nombreAvenger:nameAvenger
//En los objetos tiene que ser el mismo nombre
var nombreAvenger = avenger.nombreAvenger, claveAvenger = avenger.claveAvenger, poderAvenger = avenger.poderAvenger;
console.log(nombreAvenger, claveAvenger, poderAvenger);
//Lo devuelve ordenado
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
var ironman2 = avengers[2];
console.log(thor, capi, ironman);
console.log(ironman2);
