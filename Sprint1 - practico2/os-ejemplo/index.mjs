import os from 'os'

// obtener la arquitectura del sistema
console.log('Arquitectura: ', os.arch());

//obtener el tipo de sistema operativo
console.log('Plataforma: ', os.platform());


//obtener la cantidad total de Memoria
console.log('Memoria total: ', os.totalmem());


//obtener total de Memoria Libre
console.log('Memoria Libre: ', os.freemem());


//obtener informacion del CPU
console.log('Informacion del CPU: ', os.cpus());

