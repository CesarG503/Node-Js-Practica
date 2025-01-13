const WebSite = 'https://www.google.com';

const name = "John Doe";
const age = 25;

const group = {
    WebSite: WebSite,
    name: name,
    age // no es necesario asignarle con los dos puntos y se puede asignar directamente en export
}

module.exports = group;// En esta linea de codigo guardamos una constante la podemos extraer y usar en otro archivo

//IR A MAIN JS PARA VER COMO SE USA ESTE MODULO