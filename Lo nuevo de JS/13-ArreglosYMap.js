// Arreglos y .map

const carrito = ['Producto 1', 'Producto', 'Producto 3'];

console.log(carrito);

const appContenedor = document.querySelector('#app');
//appContenedor.innerHTML = carrito;


// let html = '';
// carrito.forEach(producto => {
//     html += `<li>${producto}</li>`;
// })

// appContenedor.innerHTML = html;

const carritoMap = carrito.map(producto =>{
    return 'El producto es '+producto;
})
//Retorna otro arreglo

console.log(carritoMap);

