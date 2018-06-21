"use strict";
var Avengers = /** @class */ (function () {
    function Avengers(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre";
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avengers;
}());
var antman = new Avengers("Antman", "Equipo Capi", "Scott Lang");
console.log(antman);
