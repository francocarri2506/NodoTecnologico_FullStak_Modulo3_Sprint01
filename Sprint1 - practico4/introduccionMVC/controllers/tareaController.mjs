//el controlador es el intermediario entre la vista el modelo y las solicitudes del usuario
//su funcion es recibir las solicitudes HTTP interactuar con la capa de servivcios 
//para procesar los datos y enviar la respuesta utilizando la vista



import {obtenerTareas, obtenerTareaPorId, agregarTarea, actualizarTarea, eliminarTarea } from '../services/tareaService.mjs';

import { renderizarListaTareas, renderizarTarea } from '../views/tareaView.mjs';

export function obtenerTodasLasTareas(req, res){
    const tareas = obtenerTareas();
    res.send(renderizarListaTareas(tareas));
}

export function obtenerTareaPorIdController(req, res){
    const {id} = req.params;
    const tarea = obtenerTareaPorId(parseInt(id));
    if (tarea){
        res.send(renderizarTarea(tarea));
    }else{
        res.status(404).send({mensaje:`Tarea ID: ${id} NO encontrada`});
    }
}

export function agregarNuevaTarea(req, res){
    const datos= req.body;
    const nuevaTarea = agregarTarea(datos);
    res.send(nuevaTarea);
}

export function actualizarTareaPorId(req, res){
    const {id} = req.params;
    const datos = req.body;
    const resultado = actualizarTarea(parseInt(id), datos);
    res.send(resultado ? 'Tarea Actualizada':'Tarea No Encontrada');
}

export function eliminarTareaPorId(req, res){
    const {id} = req.params;
    const resultado = eliminarTarea(parseInt(id));
    res.send(resultado ? 'Tarea Eliminada': 'Tarea No Encontrada');
}
