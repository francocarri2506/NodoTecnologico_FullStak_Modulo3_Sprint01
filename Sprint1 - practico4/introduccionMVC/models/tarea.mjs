//capa de modelo, encargada de representar la estructura de los datos

export default class Tarea{
    constructor(id, titulo, descripcion, completado =false){
        this.id=id;
        this.titulo=titulo;
        this.descripcion = descripcion;
        this.completado =completado;
    }

    //método para completar la tarea
    completar(){
        this.completado= true;
    }

    //método para validar que el titulo de la tarea no este vacio
    validar(){
        if(this.titulo || this.titulo.trim() === ''){
            throw new Error('El título de la tarea no puede estar vacío');
        }
    }

    //método para validar que la descripcion de la tarea no este vacia
    validarDescripcionVacia(){
        return this.descripcion.trim() === '';
    }
}