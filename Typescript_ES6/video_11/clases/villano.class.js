"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Villano = /** @class */ (function () {
    function Villano(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    Villano.prototype.imprimir = function () {
        console.log(this.nombre + " - " + this.clave);
    };
    ;
    return Villano;
}());
exports.Villano = Villano;
