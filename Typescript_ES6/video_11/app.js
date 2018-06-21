"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Puedo agrupar las clases en un fichero
var xmen_class_1 = require("./clases/xmen.class");
var villano_class_1 = require("./clases/villano.class");
var wolverine = new xmen_class_1.Xmen("Logan", "Wolverine");
var lex = new villano_class_1.Villano("Lex Luthor", "lex");
wolverine.imprimir();
lex.imprimir();
