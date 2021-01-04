//Objet Literal Enhancement

const banda = "Metallica";
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

//forma anterior

const metallica ={
    banda: banda,
    genero: genero,
    canciones: canciones
}

//Se usa lo que esta antes de ":" para darle un nombre a su propiedad y despues
//Se pasa la variable para utilizar su valor
console.log(metallica);

//forma nueva

const queen={banda,genero, canciones};

//Se usan las variables en si, no es necesario hacer un nombre y enviarle una variable.


console.log(queen);