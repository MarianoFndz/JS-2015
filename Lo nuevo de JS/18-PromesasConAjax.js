//Promesas con Ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) =>{
    //Pasar la cantidad a la api
    const api = `https://randomuserme./api/?results=${cantidad}&nat=us`;
    
    //Llamado a ajax
    const xhr = new XMLHttpRequest();

    //Abrir la conexion
    xhr.open('GET', api,true)

    // on load
    xhr.onload = () => {
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText).results)
            }else{
                reject(Error(xhr.statusText));
            }
    }

    // opcional (on error)
    xhr.onerror = (error) => reject(error);

    // send
    xhr.send();
})

descargarUsuarios(20)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error("Hubo un error" + error)
        )
    );

function imprimir(usuarios){
    //console.log(usuarios);
    let html = ''
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                Pais: ${usuario.nat}
                Imagen:
                    <img src="${usuario.picture.medium}">
            </li>
        `;
        
    })
}

const contenedoApp = document.querySelector('#app');

contenedorApp.innerHTML = html;

//La api no anda

// Callbacks: https://medium.com/@anamartinezaguilar/callbacks-en-javascript-8deeca9824b4

