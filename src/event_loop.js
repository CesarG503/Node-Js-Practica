console.log('1')

//delay

// funcion setTimeout para ejecutar bloque de codigo despues de un tiempo definido
setTimeout(()=>
    {
        console.log('2')
    },3000) // mili segundos (funcion call back)

// el codigo continua no espera a que termine la funcion setTimeout (Sync) 
console.log('3')



const http = require('http')

const port = 3000;

let server = http.createServer((req,res)=>
    {
        if(req.url === '/')
            {
                res.write('<h1>Mensaje de la ruta principal</h1>')
                return res.end();
            }
        if(req.url === '/about')
            {
                res.write('<h1>Ruta about</h1>')
                
                setTimeout(()=>{
                
                //tarea bloking code (esta tarea bloquea la ejucion del servidor) (Hilo)
                for (let index = 0; index < 100000; index++) {
                    console.log(`numero generado: ${(Math.random() * index)}`)
                } 
                return res.end();
                })



            }
        else
        {
            res.write('<h1>No encontrado</h1>')
            return res.end();
        }

    });

server.listen(port)

console.log(`server abierto en el server ${port}`)