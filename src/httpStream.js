const http = require('http')

const {createReadStream} = require('fs')

const port = 3000;

const server = http.createServer((req,res)=>{

    const fileStream = createReadStream('./data/segundo.txt','utf-8');

    fileStream.on('data',(chuck)=>{
        fileStream.pipe(res) // le paso los datos a la respuesta 
    })

    fileStream.on('error', (error)=>{ console.log(error)})

    })

server.listen(port)

console.log('servidor encendido... ')