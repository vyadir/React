/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr
*/

const nombre = "Yadir";
const apellido = "Vega";

// Con template string evitamos hacer estas concatenaciones
const nombreCompleto = nombre + ' ' + apellido;

// con template string

const nombrecompleto2 = `${nombre} ${apellido} `
console.log(nombreCompleto,nombrecompleto2);

function getSaludo(nombre)
{
    return `Hola estimado ${nombre} `;
}


console.log(` Este es un texto: ${getSaludo(`${nombre}`)}`);