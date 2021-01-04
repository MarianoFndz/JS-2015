// Metodos en Arrays

const personas = [
    {
        nombre: 'Juan',
        edad: 23,
        aprendiendo: 'Javascript'    
    },
    {
        nombre: 'Mariano',
        edad: 18,
        aprendiendo: 'PHP'    
    },
    {
        nombre: 'Roberta',
        edad: 17,
        aprendiendo: 'AdobeXD'    
    },
    {
        nombre: 'Enzo',
        edad: 123,
        aprendiendo: 'Python'    
    },
    {
        nombre: 'Marta',
        edad: 34,
        aprendiendo: 'ReactJS'    
    }
]

console.log(personas);

// Mayores de 28 años
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const mayores = personas.filter(persona =>{
    return persona.edad > 28;
})

console.log(mayores);

//¿Que esta aprendiendo Enzo y su edad?
//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
const enzo = personas.find(persona =>{
    return persona.nombre == 'Enzo'
})

console.log(`Enzo esta aprendiendo ${enzo.aprendiendo} y su edad es ${enzo.edad}`);

//Total de las edades de estas personas
//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor

let total = personas.reduce((edadtotal, persona)=>{
    return edadtotal + persona.edad;
}, 0);
console.log(personas.length);
console.log(total);

let prom = total / personas.length;

console.log(prom);

