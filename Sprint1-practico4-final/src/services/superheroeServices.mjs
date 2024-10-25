
import SuperheroeFileRepository from "../repository/superheroeRepository.mjs";


const repository = new SuperheroeFileRepository();



function obtenerSuperheroesPorId(id) {
    const superheroes = repository.obtenerTodos();
    
    return superheroes.find(hero => hero.id ===id);
}

function obtenerListaDeSuperheroes() {
    const superheroes = repository.obtenerTodos();

    return superheroes
}

function buscarSuperheroePorAtributo(atributo, valor) {
    const superheroes = repository.obtenerTodos();

    return superheroes.filter(hero => 
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase())
    );
}



function obteneerSuperheroeMayorA30() {
    const superheroes = repository.obtenerTodos();

    const edad = 30;
    const planetaOrigen = 'Tierra';
    const poderesMinimo = 2;
    const filtrados = superheroes.filter(hero => hero.edad > edad && hero.planetaOrigen === planetaOrigen && hero.poder.length>=poderesMinimo);

    return filtrados;
}

export {
        obtenerSuperheroesPorId,
        obtenerListaDeSuperheroes,
        buscarSuperheroePorAtributo, 
        obteneerSuperheroeMayorA30
    }
