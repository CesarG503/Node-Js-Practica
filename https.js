const http = require('http')

//creacion de un web Server
//protocolo HTTP

const hostname = '127.0.0.1';
const port = 3000; //ver HTTP Port para saber que puerto usar 

//funcion http para crear el servidor (manejar request(peticion), response)

//call back
const server = http.createServer((req, res) => {

    console.log(req.url); //nos llegan dos la ruta en la que estamos y el icono 
    
    //informacion de la Request 
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    if(req.url === '/')
        {
            res.write('pagina general');
            return res.end();
        }
    
    if(req.url=== '/about')
        {
            res.write('<h1>acerca de Node.js</h1>');
            return res.end();
        }


    res.write('hola server\n');
    res.end('Servidor corriendo...!\n');
});

//funcion para abrir el servidor que se este ejecutando constantemente 
server.listen(port, hostname, () => {
    console.log(`Server corriendo en  http://${hostname}:${port}/`);
});


