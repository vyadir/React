/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr

    Desestructuración de arreglos
*/


const personajes = ['Gokú', 'Vegeta','Trunks'];

// Desestructuración de un arreglo
// primer personaje
const [p1] = personajes;
console.log(p1); 

// segundo personaje
const [,p2] = personajes;
console.log(p2);

// tercer personaje
const [,,p3] = personajes;
console.log(p3);


const funcion = (valor) => 
{
    // retorna un arreglo cuya primer posición es una cadena y segunda una función
    return [valor,()=>{console.log("Hola")}];
}

/*
    Con la siguiente desestructuración del arreglo se evita hacer algo no práctico:
    suponga que arreglo = funcion('ejemplo'); luego arreglo es un arreglo que contiene en la primer posición la cadena 'ejemplo'
    y en la segunda una función, si yo quiero llamar a esa función sería algo como arreglo[1](); evidentemente no es muy practico.
*/

// realizando la desestructuración del arreglo nombre es la  posición cero y setNombre la 1, lo que implica que en nombre hay una cadena y setNombre una función 
const [nombre,setNombre] = funcion('Goku');


// imprimo nombre
console.log(nombre);

// y llamo función en ves de algo tan cochino como arreglo[1]();
setNombre();