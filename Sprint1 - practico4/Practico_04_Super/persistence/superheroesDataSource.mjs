export default class SuperheroesDataSource {    
    obtenerTodas(){
        throw new Error("Este metodo debe ser implementado por la subclase");         
    }

    guardar(){
        throw new Error("Este metodo debe ser implementado por la subclase");       
    }

    eliminar(id){
        throw new Error("Este metodo debe ser implementado por la subclase");        
    }

    actualizar(id, datos){
        throw new Error("Este metodo debe ser implementado por la subclase");        
    }

    buscarPorId(id){
        throw new Error("Este metodo debe ser implementado por la subclase");        
    }
}
