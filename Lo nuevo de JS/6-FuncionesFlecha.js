//Arrow Function

// let viajando = function(destino){
//     console.log(`Viando al destino: ${destino}`);
// }

// let viajando = destino =>{ `Viando al destino: ${destino}`
//El retorno es implisito asi que se puede obviar, las laves y parentesis tambien
//Solamente con una sola linea

let viajando = (destino, dias="algunos dias") => {
    return(`Viando al destino: ${destino} por ${dias}`);
}



let viaje = viajando('Paris');

let viaje2 = viajando('Paris','9 dias');

console.log(viaje);
console.log(viaje2);