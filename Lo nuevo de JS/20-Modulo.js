//Modulos
//Se usa para no cargar dos scripts en el index.html, ya que esta tiene que cargar dos archivos

import {crearTarea} from './19-POO.js';
//import nombreTarea  from './19-POO.js';

// console.log(nombreTarea);

const tarea1 = crearTarea('Pasear al perro','Alta');

console.log(tarea1);


//Nos permite separar nuestros archivos e importar lo que necesitemos

//Importar clases
import Tarea  from './19-POO.js';

const tarea2 = new Tarea('Aprender Javascript', 'Urgente');
console.log(tarea2);



