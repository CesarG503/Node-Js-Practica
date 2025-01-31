const os = require('os');


console.log(os.userInfo()); 

console.log(os.hostname());
console.log(os.platform()); // Windows, Linux, MacOS


console.log(os.uptime()); // Tiempo que lleva encendido el sistema operativo

console.log(os.totalmem()); // Memoria total del sistema
console.log(os.freemem()); // Memoria libre del sistema


console.table({
    os: os.platform(),
    version: os.version(),
    user: os.userInfo(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    hostname: os.hostname(),
    uptime: os.uptime(),
    networkInterfaces: os.networkInterfaces()

});

