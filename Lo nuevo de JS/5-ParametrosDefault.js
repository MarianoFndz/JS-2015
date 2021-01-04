//Parametros por default en las funciones

function actividad(nombre = 'Walter White', actividad = "Enseñar Quimica"){
    console.log(`La persona ${nombre} esta realizando la actividad ${actividad}`)
}
//Ingresamos en los parametros los valores por default
actividad('Mariano', 'programando');
actividad('Juan', 'Corriendo');
actividad();
actividad('Antonio');
 

//Expression

const actividad2 = function(nombre="Mariano", actividad="Jugando"){
    console.log(`La persona ${nombre} esta realizando la actividad ${actividad}`)
}

actividad2();
actividad2("Roberto","saltando")