const fs = require('fs')
const path = require('path')

// Lectura de archivos
let archivo_de_texto = fs.readFileSync(path.join(__dirname, 'data', 'primero.txt'), 'utf-8'); //usamos join para acceder a la ruta compatible en todas las plataformas

let archivo_de_texto_2 = fs.readFileSync(path.join(__dirname, 'data', 'segundo.txt'));

console.log(archivo_de_texto)
console.log(archivo_de_texto_2.toString())


// Escritura de Archivos
const ruta_archivo = path.join(__dirname,'data','tercero.txt');
let contenido = 'contenido del archivo nuevo';
let nuevo_contenido = '\nNuevo contenido';

fs.writeFileSync(ruta_archivo, contenido); // crea el archivo si no existe || trunca si existe 

 
fs.writeFileSync(ruta_archivo, nuevo_contenido, { flag: 'a'})

/* flag: 
'r': Abre el archivo para lectura. Si el archivo no existe, se lanzará un error.
'r+': Abre el archivo para lectura y escritura. Si el archivo no existe, se lanzará un error.
'rs+': Abre el archivo para lectura y escritura en modo síncrono. Esto es útil para archivos en sistemas de archivos NFS.
'w': Abre el archivo para escritura. Si el archivo no existe, se creará. Si el archivo existe, se truncará (se borrará su contenido).
'wx': Similar a 'w', pero fallará si el archivo ya existe.
'w+': Abre el archivo para lectura y escritura. Si el archivo no existe, se creará. Si el archivo existe, se truncará.
'wx+': Similar a 'w+', pero fallará si el archivo ya existe.
'a': Abre el archivo para anexar. Si el archivo no existe, se creará.
'ax': Similar a 'a', pero fallará si el archivo ya existe.
'a+': Abre el archivo para lectura y anexar. Si el archivo no existe, se creará.
'ax+': Similar a 'a+', pero fallará si el archivo ya existe.
*/