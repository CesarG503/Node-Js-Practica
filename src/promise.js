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





