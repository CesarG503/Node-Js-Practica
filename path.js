const path = require('path');

console.log(path.sep); // Devuelve el separador de rutas de la plataforma

console.log(path.join('content', 'subfolder', 'test.txt')); // Une las rutas en el formato de la plataforma


let ruta = path.join('content', 'subfolder', 'test.txt');

console.log(path.basename(ruta));

console.log(path.dirname(ruta));

console.log(path.parse(ruta));


console.log(path.resolve('desktop'));
