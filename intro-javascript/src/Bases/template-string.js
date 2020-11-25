/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr

    Los template string
*/

const nombre = "Yadir";
const apellido = "Vega";

// Con template string evitamos hacer estas concatenaciones
const nombreCompleto = nombre + ' ' + apellido;

// con template string, dentro de las llaves indicamos que hay código js
const nombrecompleto2 = `${nombre} ${apellido} `

// imprimo
console.log(nombreCompleto,nombrecompleto2);

// función de ejemplo
function getSaludo(nombre)
{
    return `Hola estimado ${nombre} `;
}

// caracteristicas de jsx
console.log(` Este es un texto: ${getSaludo(`${nombre}`)}`);