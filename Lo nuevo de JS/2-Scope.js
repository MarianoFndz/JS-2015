// Scope

// var musica = "Rock";

// if(musica){
//     var musica = "Punk";
//     console.log('dentro del if: ', musica);
// }
// console.log('Fuera del IF', musica); //Reescribiste la variable
//=========================
let musica = "Rock";
const variable = 23;
if(musica){
    const variable = 22;
    let musica = "Punk";
    console.log('dentro del if: ', musica);
    console.log('dentro del if: ', variable)
}
console.log('Fuera del IF', musica); //No reescribiste la variable
console.log(variable);

//Scope podria definirse como el alcance de una variable en el codigo
//Hay dos tipos de Scope: Scope global y Scope Local
//Scope Local: La variable es local si se declara entre llaves, solo puede accederse en esa parte del codigo. Puede ser const o let;
//Scope Global: La variable es global si se declara fuera de una funcion o bloque, puede accederse por cualquier parte del codigo. Puede ser const o let;
//
//Se usa const y let
//https://platzi.com/blog/como-funciona-el-scope-en-javascript/

