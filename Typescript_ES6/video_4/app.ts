
function getNombre(){
    return "Fernando";
}

let nombreUser:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

//String de MultiLinea
let texto = `Hola, ${ nombre } ${ apellido } (${ edad })`;

//$ { codigo de javascript }
let texto2:string = `${ 1 + 2 }`;

let texto3:string = `${ getNombre() }`;

console.log(texto);