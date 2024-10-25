import {
    obtenerSuperheroesPorId,
    obtenerListaDeSuperheroes,
    buscarSuperheroePorAtributo, 
    obteneerSuperheroeMayorA30} from '../services/superheroeServices.mjs'

import { 
    renderizarMensaje, 
    renderizarSuperheroe, 
    renderizarListaSuperheroe } from '../view/superheroeVista.mjs';


function homeController(req,res) {
    res.send('Página de Inicio')
}

function obtenerSuperheroePorIdController(req, res) {
    const {id} = req.params;
    const superheroe = obtenerSuperheroesPorId(parseInt(id));
    
    if (superheroe) {
        res.send(renderizarSuperheroe(superheroe));
    }else{
        res.status(404).send(renderizarMensaje('Superheroe no encontrado'))
    }
}

function obtenerListaDeSuperheroesController(req, res) {
    const superheroes = obtenerListaDeSuperheroes()

    if (superheroes) {    
        res.send(renderizarListaSuperheroe(superheroes));
    }else{
        res.status(404).send(renderizarMensaje('Lista de superheroes no encontrada.'))
    }
}


function buscarSuperheroePorAtributoController(req, res) {
    const {atributo, valor} = req.params;
    const superheroes = buscarSuperheroePorAtributo(atributo, valor);

    if (superheroes.length > 0) {
        res.send(renderizarListaSuperheroe(superheroes));
    }else{
        res.status(404).send(renderizarMensaje('No se encontraron superheroes con ese atributo'))
    }
}

function obenerSuperheroeMayorA30Controller (req, res) {
    const listaSuperheroes = obteneerSuperheroeMayorA30();

    if (listaSuperheroes.length > 0) {
        res.send(renderizarListaSuperheroe(listaSuperheroes));
    }else{
        res.status(404).send(renderizarMensaje('No se encontraron superheroes mayor a 30 años'));
    }
}

//EXPORTAMOS LAS FUNCIONES
export {
        homeController,
        obtenerSuperheroePorIdController,
        obtenerListaDeSuperheroesController,
        buscarSuperheroePorAtributoController, 
        obenerSuperheroeMayorA30Controller
    }