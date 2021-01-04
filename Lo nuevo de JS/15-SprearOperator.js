// Sprear operator ...

//Combina 2 arreglos diferentes

let lenguajes = ['Python','PHP','JavaScript'];
let frameworks = ['Django','Laravel','React.js'];

//2 arreglos en 1
//Forma anterior

let combinacion = lenguajes.concat(frameworks);

//Ahora
let combinacion2 = [...lenguajes,...frameworks];

//console.log(combinacion, combinacion2)

////////////////////

let [ultimo] = lenguajes.reverse();
//Te deja al revez el arreglo
lenguajes.reverse();

let [ultimoSprear] = [...lenguajes].reverse();
//Me lo deja normal y me devuelve el ultimo

console.log(ultimoSprear);

////////////////////

function suma(a,b,c){
    console.log(a+b+c);
}

const numeros = [1,2,3];

//suma(numeros);//ERROR

suma(...numeros);

