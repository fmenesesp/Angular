let avenger = {
    nombreAvenger: "Steve",
    claveAvenger: "Capitan America",
    poderAvenger: "Droga"
}

//NO podemos dar tipos de datos, pero si alias nombreAvenger:nameAvenger
//En los objetos tiene que ser el mismo nombre
let { nombreAvenger, claveAvenger, poderAvenger} = avenger;

console.log(nombreAvenger, claveAvenger, poderAvenger);

//Lo devuelve ordenado
let avengers:string[] = ["Thor", "Steve", "Tony"];

let [ thor, capi, ironman] = avengers;

let [ , , ironman2] = avengers;

console.log(thor, capi, ironman);

console.log(ironman2);