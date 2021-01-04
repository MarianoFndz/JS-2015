 const nombreTarea = 'Pasear al perro';
 const crearTarea = (tarea, urgencia) => {
     return `La tarea es ${tarea}, y tinene una urgencia ${urgencia}`;
 }
 // export const nombreTarea = 'Pasear al perro';
export {crearTarea};
 //En el import no se puede renombrar
//export default nombreTarea; //Solo puede haber una por archivo
//En el import se puede renombrar
//Si se le agrega llaves a la variable pasa a ser objeto

 //Escribir Clases

export default class Tarea {
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        //return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

//crear objeto

let tarea1 = new Tarea('Aprender Javascript', 'Alta');
let tarea2 = new Tarea('Aprender React', 'Alta');
let tarea3 = new Tarea('Aprender Go', 'Baja');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());

//Herencia de clases


//Supongamos que estamos en otro archivo, en este caso no
class ComprasPendientes extends Tarea{
    // constructor(nombre,prioridad, cantidad){
    //     this.nombre = nombre;
    //     this.prioridad = prioridad;
    //     this.cantidad
    // } ERROR, debes llamar a super() para que haga referencia al constructor padre

    constructor(nombre, prioridad, cantidad){
        super(nombre,prioridad);
        this.cantidad = cantidad;
    }

    mostrar(){
        super.mostrar(); 
        //return `${this.nombre} tiene una prioridad de ${this.prioridad}`
        //No pueden retornar los dos a la vez
        console.log(`y una cantidad de ${this.cantidad}`);

    }

}

let compra1 = new ComprasPendientes('Huevo','Alta','3');
let compra2 = new ComprasPendientes('Computadora','Baja','4');

// compra1.mostrar();
// compra2.mostrar();