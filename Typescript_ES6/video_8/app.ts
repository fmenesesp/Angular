let prom1 = new Promise( function( resolve, reject ){
    setTimeout(() => {
        console.log("Promesa terminada");
        //Termina bien;
        resolve();

        //reject();
    }, 1500);


    
});

console.log("Paso 1");

prom1.then( function(){
    console.log("Ejectuar cuando termina bien");
},
    function(){
        console.error("Ejecutar cuando termina mal");
    }
);

console.log("Paso 2");