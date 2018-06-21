

//Puedo agrupar las clases en un fichero
import { Xmen } from "./clases/xmen.class"
import { Villano } from "./clases/villano.class"


let wolverine = new Xmen("Logan", "Wolverine");
let lex = new Villano("Lex Luthor", "lex");

wolverine.imprimir();
lex.imprimir();


