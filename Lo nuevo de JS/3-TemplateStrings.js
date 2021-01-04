//Template Strings

const nombre = "Juan";
const trabajo = "Desarrollador WEB";

//Concatenar javascript (anterior)
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);

//Concatenar javascript (ahora)
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//Concatenar con multiples lineas (anterior)
const contenedorApp= document.querySelector('#app');
// let html = '<ul>'+
//                 '<li> Nombre: ' + nombre + '</li>' +
//                 '<li> Trabajo: ' + trabajo + '</li>' +
//              '</ul>';
// contenedorApp.innerHTML = html;

//Concatenar con multiples lineas (ahora)

let html = `
            <ul>
                <li> Nombre: ${nombre}</li>
                <li> Trabajo: ${trabajo}</li>
            </ul>
            `;

contenedorApp.innerHTML = html;

const Welcome = ({nombre, apellido}) => {
    return (<h1>Hello, {nombre} {apellido}</h1>)
 }
 export default Welcome;
 
 <Welcome 
    name="nicolas" 
    apellido="lucero"
 />