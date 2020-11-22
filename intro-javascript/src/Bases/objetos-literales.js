/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr
*/

const persona = 
{
    nombre: "Yadir",
    apellido : "Vega",
    edad:  23,
    direccion:
    {
        ciudad: "Alajuela",
        zip: 30101,
        lat: 14.33,
        lon: 12.1,
    }
};

// console.table(persona); imprimir como tabla
// const persona2 = persona;  esto es una copia de la referencia en memoria no una nueva instancia.

const persona2 = {...persona}; // este es un clon, con nueva referencia de memoria
console.log(persona);