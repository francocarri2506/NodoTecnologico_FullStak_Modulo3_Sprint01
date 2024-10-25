


function renderizarMensaje(mensaje) {
    return JSON.stringify({mensaje}, null, 2);
}

function renderizarSuperheroe(superheroe) {
    return JSON.stringify(superheroe, null, 2);
}

function renderizarListaSuperheroe(superheroes) {
    return JSON.stringify(superheroes, null, 2);
}



export {
        renderizarMensaje,
        renderizarSuperheroe,
        renderizarListaSuperheroe
    }