const persona = {
    nombre:'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
}
console.log(persona);

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}
//Los prototypes sirven para crear funciones a un tipo de objeto
Tarea.prototype.mostrarInformacionTarea = function(){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`
}//Sin parametros porque ya uso las variables del objeto "Tarea" 

const tarea1 = new Tarea('Aprender JavaScript','Urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
