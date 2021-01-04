// Metodos o funciones de un objeto.

const persona = {
    nombre:'Juan',
    trabajo: 'Desarrollador Web',
    edad: 500,
    musicaRock: true,
    //ANTES
    // mostrarInformacion: function(){
    //     console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    // }
    //AHORA
    mostrarInformacion(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}

persona.mostrarInformacion();