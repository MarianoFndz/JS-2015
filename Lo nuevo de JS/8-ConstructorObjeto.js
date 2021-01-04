//Objet Constructor
//Se usaba antes de la implementacion de clases

const persona = {
    nombre:'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
}
console.log(persona);
//Los constructores se recomiendan declarar con la primera letra en mayuscula
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea('Aprender JavaScript','Urgente');
console.log(tarea1);
console.log(tarea1.nombre);
console.log(tarea1.urgencia);