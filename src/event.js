
const EventEmitter = require('events')


const customEmitter = new EventEmitter() // CREAMOS EL OBJETO DE EVENTO


customEmitter.on('response', (data, secondData)=>{ //manejo de eventos en el backend
    console.log('Check')
    console.log(data);

    if(secondData != null)
        {
            console.log(secondData);
        }
});

customEmitter.emit('response','Hola mundo')

customEmitter.emit('response','x',[1,2,3])
