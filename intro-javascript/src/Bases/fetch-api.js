/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr

    Fetch API, peticiones http a endpoints sin importar librerias, pero no quiere decir que sea el mejor
    Fetch viene incluida en js y navegador web


    url del sitio: https://developers.giphy.com/
    De ahi obtendré el api key, llamado a api.giphy.com/v1/gifs/random mandando el api key y nos va a regresar una imagen
*/


// api key obtenida en el sitio
const apiKey = '5uEc8dtY45sdIg2hhYJhjB18DiHY9XVC';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


/* Peticion fea, por dicha las promesas pueden encadenarse
peticion.then(resp => 
{
    resp.json().then(data => 
        {
            console.log(data);
        });
}).catch(console.warn);

*/

// carpintería 
peticion.then(resp => resp.json())
.then(({data}) => 
    {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
.catch(console.warn);