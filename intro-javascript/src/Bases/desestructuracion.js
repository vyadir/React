/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr

    Nota: La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores 
          de arreglos o propiedades de objetos en distintas variables.
*/

const persona = 
{
    nombre: "Yadir",
    apellido: "Vega",
    edad: 15,
}

// Suele llamarse destructuración o asignación desestructurante
const {nombre, apellido, edad} = persona;

// lo anterior realizado en una función
const retornaPersona = ({nombre, apellido,edad})=>
{
    console.log(nombre,apellido, edad);
}

retornaPersona(persona);