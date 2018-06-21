
//Funciones y funciones de flecha
let  minFuncion = function( a ) {
    return a;
}

let minFuncionF = a => a;

console.log(minFuncion("Normal"));
console.log(minFuncionF("Flecha"));

/////////////////////////

let minFuncion2 = function(a:number, b:number){
    return a + b;
}

let minFuncion2F = (a:number, b:number) => a + b;

/////////////////////////

let minFuncion3 = function( nombre:string ){
    nombre = nombre.toUpperCase();
    return nombre;
}

let minFuncion3F = ( nombre:string )=>{
    nombre = nombre.toUpperCase();
    return nombre;
}

/////////////////////////

let hulk = {
    nombre: "Bruce",
    smash(){
        setTimeout(() => console.log(this.nombre + "smash!!"), 150);
   }
}

hulk.smash();

/////////////////////////

