//Creando una funcion

//Function Declaration
saludar("Juan"); //No importa donde se llame, va a correr sin problemas
function saludar(nombre){
    console.log(`Bienvenido ${nombre}`);
}

saludar("Juan");
saludar("Mariano");
saludar("Alejandra");

//Function expression
cliente('Juan');//ERROR: debes declarar las funciones antes de usarlas
const cliente = function(nombreCliente){
    console.log(`Mostrando datos del cliente: ${nombreCliente}`)
}
cliente('Juan');

