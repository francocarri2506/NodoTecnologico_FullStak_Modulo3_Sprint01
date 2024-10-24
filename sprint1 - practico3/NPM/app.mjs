import express from 'express';

// crear una isntancia de express
const app = express();
// configurar el puerto en el que el servidor escuchara
const PORT = 3000;

// ruta basica

app.get('/', (req, res) =>{
    res.send('Hola Mundo');
});

// iniciar el servidor
app.listen(PORT,() =>{
    console.log(`Servidor Carriendo en http://localhost:${PORT}`);
});






