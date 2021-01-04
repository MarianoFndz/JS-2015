//Promises 

//Una Promise es un objeto que representa la terminación o el fracaso de una operación asíncrona
//resolve cuando es correcto
//reject cuando ocurrio un error
const aplicarDescuento = new Promise((resolve, reject) => {
    //setTimeout en este caso simula una peticion asincrona
    setTimeout( () => {
        let descuento = false;

        if(descuento){
            resolve('Descuento aplicado')
        }else{
            reject('No se pudo aplicar el descuento')
        }
    }, 1000);
})

aplicarDescuento.then(resultado => {
    console.log(resultado)
})