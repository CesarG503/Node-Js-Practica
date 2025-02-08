
// Idea = manejar la entrega de archivo por partes 

const {writeFile, stat}=require('fs/promises')
const {createReadStream} = require('fs')


async function WriteFileBig() //funcion para crear un archivo grande // 95MB
{

    await writeFile('./data/bigFile.txt', 'Hola mundo'.repeat(10000000))
    
}

async function getFileSize(filePath) { //funcion para ver el tamaño del archivo creado 
    try {
        const stats = await stat(filePath);
        console.log(`File size: ${stats.size} bytes`);
    } catch (error) {
        console.error('Error getting file size:', error);
    }
}


getFileSize('./data/bigFile.txt') 

const stream = createReadStream('./data/bigFile.txt', 
    {
        encoding: 'utf-8' //propiedades del stream 

        /*
        * - encoding: especifica la codificación de caracteres que se utilizará.'utf-8'.
        * - highWaterMark: la cantidad máxima de bytes que se almacenarán en el búfer interno antes de dejar de leer desde el recurso subyacente. El valor predeterminado es 64 KB.
        * - autoClose: si se establece en true (predeterminado), el descriptor de archivo se cerrará automáticamente cuando finalice la transmisión.
        * - emitClose: si se establece en true (predeterminado), la transmisión emitirá un evento de 'cierre' después de que se haya destruido.
        * - start: el desplazamiento de bytes desde el que se comenzará a leer. El valor predeterminado es 0.
        * - end: el desplazamiento de bytes en el que se dejará de leer (incluido). El valor predeterminado es infinito.
        *
        */
        
    }); 

stream.on('data', (chuck) =>{ // el vento va leyendo el archivo por partes (haciendo la entrega mas fluida para el usario )
    console.log(chuck)
})

//el objeto steam tiendo varios eventos
stream.on('end',()=>{console.log('termino de leer el archivo')})

