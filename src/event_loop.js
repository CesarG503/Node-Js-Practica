console.log('1')

//delay

// funcion setTimeout para ejecutar bloque de codigo despues de un tiempo definido
setTimeout(()=>
    {
        console.log('2')
    },3000) // mili segundos (funcion call back)

// el codigo continua no espera a que termine la funcion setTimeout (Sync) 
console.log('3')