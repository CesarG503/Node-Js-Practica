
const express = require('express')

const app = express();
const port = 3000;

app.get('/',(req,res)=>
    {
        res.send('<h1>Welcome to the principa root</h1>');
        console.log(req.url)
    })

app.get('/about',(req,res)=>
    {
        res.send('<h1>Seccion de about</h1>');
        console.log(req.url)
    })

app.listen(port)

console.log(`server on port : ${port}`)
