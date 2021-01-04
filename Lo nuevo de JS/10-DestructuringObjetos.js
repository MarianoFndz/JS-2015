//Destructuring de objetos

const aprendiendoJS = {
    version:{
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['Reac','Vue','Angular']
}

//Destructuring es como extraes valores de un objeto

console.log(aprendiendoJS);

// version anterior
let version = aprendiendoJS.version.nueva;
let frameworks = aprendiendoJS.frameworks[1];
console.log(version);
//Mayor difucultad cuando el objeto tenga mayor profundidad

//Destructuring forma nueva
let{version, frameworks} = aprendiendoJS;
let {nueva} = aprendiendoJS.version;
console.log(version);
console.log(frameworks);
console.log(nueva);

