"use strict";
//Funciones y funciones de flecha
var minFuncion = function (a) {
    return a;
};
var minFuncionF = function (a) { return a; };
console.log(minFuncion("Normal"));
console.log(minFuncionF("Flecha"));
/////////////////////////
var minFuncion2 = function (a, b) {
    return a + b;
};
var minFuncion2F = function (a, b) { return a + b; };
/////////////////////////
var minFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var minFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
/////////////////////////
var hulk = {
    nombre: "Bruce",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + "smash!!"); }, 150);
    }
};
hulk.smash();
/////////////////////////
