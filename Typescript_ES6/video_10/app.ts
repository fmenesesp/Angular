class Avengers {

    nombre:string = "Sin nombre";
    equipo:string = undefined;
    nombreReal:string = undefined;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

}


let antman:Avengers = new Avengers("Antman", "Equipo Capi" , "Scott Lang");

console.log(antman);