/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr

    Operador condicional ternario
   
*/

const activo = true;



/* no esta mal pero no es recomendado
    let mensaje='';
    if(activo)
    {
        mensaje = 'Activo';
    }
    else
    {
        mensaje = 'Inactivo';
    }
*/

//const mensaje = (activo) ? 'Activo':'Inactivo';
//const mensaje = (activo) ? 'Activo':'null';

// forma corta de un if, si activo es true retorna activo
const mensaje = activo && 'Activo';

console.log(mensaje);