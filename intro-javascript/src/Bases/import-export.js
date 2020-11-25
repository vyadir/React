/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr

    Import, Export y funciones comunes de arreglos
*/

// Deseo importar el archivo que está en data/heroes.js


// si son importaciones multiples se separa con coma y tener cuidado si son por defecto o no
import heroes  from '../data/heroes';  // no es necesario la extensión y si no es exporte por defecto se pone {heroes}

// cabe destacar que hay varias formas de importar 
// console.log(heroes);

// imp y tab: import {heroes} from './data/heroes'

// busco heroe por id con funcion de flecha y muy abreviada

/*
    The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
*/
export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);   

// imprimo uno con id 2
// console.log(getHeroesById(2));

// el find no sirve para buscar por owner por ejemplo porque retorna 1 nada más, hay que utilizar filter

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);   

// imprimo uno con owner DC
// console.log(getHeroesByOwner('DC'));

