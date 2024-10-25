import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


import SuperheroesDataSource from './superheroesDataSource.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

export default class SuperheroesFileRepository extends SuperheroesDataSource {
    constructor(){
        super();      
        this.filePath = path.join(__dirname, '../superheroes.txt');        
    }

    obtenerTodos(){
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }

    guardar(superheroes){
        fs.writeFileSync(this.filePath, JSON.stringify(superheroes, null, 2));
    }

    /*
    agregar(superheroe){
        const superheroes = this.obtenerTodos();
        superheroes.push(superheroe);
        this.guardar(superheroes);
    }

    actualizar(superheroe){
        const superheroes = this.obtenerTodos();
        const index = superheroes.findIndex((s) => s.id === superheroe.id);
        if(index >= 0){
            superheroes[index] = superheroe;
            this.guardar(superheroes);
        }

        return index >= 0;
    }
        
    */

}