"use strict";
//Parametos obligatorios
function activar(quien, //Valores obligatorios
objecto, //Valor por defecto
momento) {
    if (objecto === void 0) { objecto = "BatSeñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objecto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objecto;
    }
    console.log(mensaje);
}
activar("Gordon");
