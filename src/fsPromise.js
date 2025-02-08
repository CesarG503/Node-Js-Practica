
const {readFile} = require('fs/promises')

async function read()
{
    try {

        let result  = await  readFile('./data/primero.txt','utf-8');

        console.log(result)

    } catch (error) {
        console.log(error)   
    }
}

read();