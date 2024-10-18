import http from 'http';

//Crear un servidor Http basico

const server = http.createServer((req, res)=>{
    res.statusCode =200;
    res.setHeader('Cotent-Type', 'text/plain');
    res.end('!Hola, Mundo!');
})


// Configurar el Servidor para que escuche en port 3000

server.listen(3000, '127.0.0.1', ()=>{
    console.log('  Servidor corriendo en http://127.0.0.1:3000/');
    
})