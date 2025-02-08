const { readFile} = require('fs');
const { join} = require('path');

// funcion que lee un archivo
function GetText(pathFile) {
    return new Promise(function(resolve, reject) { // usamos promise que devuelve dos funciones
        readFile(join(pathFile), 'utf-8', (error, data) => {
            if (error) reject(error); // funcion reject 
            resolve(data); //funcion resolve
        });
    });
}

// Llamada de la funcion y manejo de promise 
GetText('./data/segundo.txt')
    .then((result) => console.log(result))
    .catch((error) => console.log(error));



async function ReadText() // todo lo que esta adentro de esta funcion async se ejeuta secuencialmente
{   
    try{
    const result = await GetText('./data/primero.txt')   
    const result2 = await GetText('./data/segundo.txt')  
    const result3 = await GetText('./data/tercero.txt')    
      
    console.log(result)
    console.log(result2)
    console.log(result3)

    throw new Error('Error creado')

    }catch (error)
    {

    }

}

ReadText();

async function ReadTextAsync() // Las operaciones dentro de Promise.all se ejecutan en paralelo
{   
    const [result, result2, result3] = await Promise.all([
        GetText('./data/primero.txt'),
        GetText('./data/segundo.txt'),
        GetText('./data/tercero.txt')
    ]);

    console.log(result);
    console.log(result2);
    console.log(result3);
}

ReadTextAsync();



