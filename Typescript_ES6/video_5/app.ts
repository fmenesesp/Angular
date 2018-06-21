

//Parametos obligatorios
function activar(quien:string, //Valores obligatorios
                    objecto:string = "BatSeñal", //Valor por defecto
                    momento?:string ){ // Valor opcional
    let mensaje:string;


    if (momento){
        mensaje = `${ quien } activo la ${ objecto } en la ${ momento }`;
    } else {
        mensaje = `${ quien } activo la ${ objecto }`;
    }

    console.log(mensaje);

}

activar("Gordon");