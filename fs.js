const fs = require('fs');
const path = require('path');

// Unify platform paths
const dataDir = path.join(__dirname, 'data');

// Lectura de archivos
let archivo_de_texto = fs.readFileSync(path.join(dataDir, 'primero.txt'), 'utf-8');
let archivo_de_texto_2 = fs.readFileSync(path.join(dataDir, 'segundo.txt'));

console.log(archivo_de_texto);
console.log(archivo_de_texto_2.toString());

// Escritura de Archivos
const ruta_archivo = path.join(dataDir, 'tercero.txt');
let contenido = 'contenido del archivo nuevo';
let nuevo_contenido = '\nNuevo contenido';

fs.writeFileSync(ruta_archivo, contenido); // crea el archivo si no existe || trunca si existe
fs.writeFileSync(ruta_archivo, nuevo_contenido, { flag: 'a' });

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

// la funcion se llama callback
fs.readFile(ruta_archivo, 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);

        fs.readFile(path.join(dataDir, 'primero.txt'), 'utf-8', function (error, data) {
            if (!error) {
                console.log(data);
            }
        });
    }
});

// Crear directorio si no existe
const newDir = path.join(dataDir, 'newDir');
if (!fs.existsSync(newDir)) {
    fs.mkdirSync(newDir);
}

// Eliminar archivo
const fileToDelete = path.join(dataDir, 'archivo_a_eliminar.txt');
if (fs.existsSync(fileToDelete)) {
    fs.unlinkSync(fileToDelete);
}

// Renombrar archivo
const oldPath = path.join(dataDir, 'archivo_viejo.txt');
const newPath = path.join(dataDir, 'archivo_nuevo.txt');
if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
}



