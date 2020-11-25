/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr

    Promesas en js
*/
import { getHeroesById } from './Bases/import-export.js';


// convención resolve es un callback que se ejecuta cuando la 
// promesa es exitosa de lo contrario si no se puede cumplir o algo falla se manda el callback reject


// recibe id
const getHeroesByIdAsync = (id)=>
{
    // podría asignarlo a una constante pero no es optimo
    return new Promise((resolve, reject)=>
    {
        // setTimeOut permite ejecutar una tarea en cierto tiempo y recibe un callback y los milis
        setTimeout(()=>
        {
            // busco por id
            const heroe = getHeroesById(id);

            // si existe mando el resolve
            if(heroe)
            {
                // el resolve lo transfiere al then
                resolve(heroe); 
            }
            // si no, mando el reject
            else
            {
                reject('No se pudo encontrar al héroe');
            }
            // tiempo de respuesta
        },2000)
    });
}

// llamo la funcion, busco por id=1, then lo buscado con exito y catch por si hay que mandar el warn
getHeroesByIdAsync(1).then(console.log).catch(console.warn);