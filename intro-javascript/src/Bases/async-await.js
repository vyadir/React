/*
    Elaborado por: Yadir Vega Espinoza
    Correo: vespinoza@ic-itcr.ac.cr

    Async await
*/
const getImagen = async() =>
{
    try
    {
        // api key obtenida en el sitio
        const apiKey = '5uEc8dtY45sdIg2hhYJhjB18DiHY9XVC';

        // espera a obtener respuesta antes de ejecutar lo siguiente
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        
        // desestructuro data para no hacer data.data
        const {data} = await resp.json();

        // carpintería
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    }catch(error)
    {
        // manejar el error
        console.error(error);
    } 
}

getImagen();

