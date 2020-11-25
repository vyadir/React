/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr

    Arreglos
*/

// const arreglo = new Array(100); crea un arreglo de 100 posiciones vacías
// arreglo.push(1);  agrega una nueva posición 


const arreglo = [1,2,3,4]; // crea un arreglo de cuatro posiciones cuyos valores son 1,2,3 y 4

let arreglo2 = [...arreglo,5]; // crea un nuevo arreglo que contiene el arreglo anterior mas una nueva posición cuyo valor es 5

// toma el arreglo2 multiplica cada elemento por 2 y lo guarda en un nuevo arreglo: arreglo3
const arreglo3 = arreglo2.map(function(numero)
{
    return numero*2;
});

console.log(arreglo3);