import { EventEmitter } from "events";

//  Crear una instancia de EventEmitter.
const emisor = new EventEmitter();

// definir un evento personalizado
emisor.on('Saludo', (nombre)=>{
    console.log(` ¡Hola ${nombre}!`);
})

// Emitir el evento Saludo

emisor.emit('Saludo', 'Mundo');