
//funcion para renderizar una lista de tareas en formato JSON
export function renderizarListaTareas(tareas){
    return JSON.stringify(tareas, null, 2);
}

//funcion para renderizar un mensaje generico en formato JSON

export function renderizarMensaje(mensaje){
    return JSON.stringify({mensaje}, null, 2);
}

//funcion para renderizar una tarea especifica en formato JSON

export function renderizarTarea(tarea){
    return JSON.stringify(tarea, null, 2);
}