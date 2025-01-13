
/* Se ejecuta una vez despues de 5 segundos (El programa espera en esta linea) */
setTimeout(() => {
    console.log('Mensaje después de 5 segundos');
}, 5000);

/** Se repite indefinidamente cada 3 segundos */

setInterval(() => {

    console.log('Mensaje cada 3 segundos');
    
}, 3000);

