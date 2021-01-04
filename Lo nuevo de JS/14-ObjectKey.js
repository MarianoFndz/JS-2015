// Object Key

const persona = {
    nombre: 'Juan',
    profesion: 'Desarollador',
    edad: 50
}

const {nombre} = persona;
console.log(nombre);

//Para obtener los keys, es decir por ejemplo: nombre, profesion y edad en este caso.

console.log(Object.keys(persona));