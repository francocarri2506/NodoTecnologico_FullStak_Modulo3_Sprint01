import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroeDataSource from './superheroeDataSource.mjs';

const __filename = fileURLToPath(import.meta.url); //toda url completa (D:documentos/..)
const __dirname = path.basename(__filename); //obtine el último nivel (superheroeRepository.mjs) 

console.log("FILENAME: ",__filename);
console.log("DIRNAME: ",__dirname);


export default class SuperheroeFileRepository extends SuperheroeDataSource{

    constructor(){
        super();
        this.filePath = path.join(__dirname,'../superheroe.txt');
    }

    obtenerTodos(){
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data) //Convierte el archivo en un array de objetos js
    }

}