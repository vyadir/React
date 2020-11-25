/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr

    Funciones 
*/

// Practica recomendada para crear funciones
const saludar = function(nombre)
{
    return `Hola ${nombre}`;
}


// Practica NO recomendada para crear funciones
function saludar2(nombre)
{
    return `Hola ${nombre}`;
}

// funciones de flecha, hace lo mismo que la funcion saludar
const saludar3 = (nombre) =>
{
    return `Hola ${nombre}`;
}

// funciones de flecha, cuando solo tiene return, para simplificar. No se usa el return
const saludar4 = (nombre) => `Hola ${nombre}`;

// funciones de flecha, cuando solo tiene return, sin parametros, se indican solo los parentesis
const saludar5 = () => "Hola Vega";

// funcion de flecha para retornar un objeto, se especifica dentro de parentesis
const getUser = () => ({uId: 12345678, uName: "Yadir"})

// ejemplo de funcion de flecha que retorna objeto
const getUsuarioActivo = (nombre) => ({uid:1234,username:"osiris"});

