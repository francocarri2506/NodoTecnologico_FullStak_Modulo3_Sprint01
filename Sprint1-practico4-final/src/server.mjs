import express from 'express';
import {
        homeController,
        obtenerSuperheroePorIdController,
        obtenerListaDeSuperheroesController,
        buscarSuperheroePorAtributoController, 
        obenerSuperheroeMayorA30Controller
        } from './controllers/superheroesControllers.mjs'


const app = express();


//MIDDLEWARE
app.use(express.json());


const PORT = 3005;


app.get('/', homeController);
app.get('/superheroes', obtenerListaDeSuperheroesController);
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor',buscarSuperheroePorAtributoController);
app.get('/superheroes/edad/mayorA30', obenerSuperheroeMayorA30Controller);



app.listen(PORT, ()=>{
    console.log(`El servidor se está ejecutando en http://localhost:${PORT}`);
})
