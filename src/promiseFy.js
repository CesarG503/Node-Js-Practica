const {promisify} = require('util')
const {readFile} = require('fs')

// la funcion prmisify de util, necesita una funcion para que permita usarla Asincronamente

//

const readFilepromise = promisify(readFile);


async function read() // funcion async 
{
    try{

        const result = await readFilepromise('./data/primero.txt','utf-8') //await espera a que la promesa se resuelva (si no devuelve una promesa pendiente)
        console.log(result)

    }catch(error){
        console.log(error)
    }

}


read();