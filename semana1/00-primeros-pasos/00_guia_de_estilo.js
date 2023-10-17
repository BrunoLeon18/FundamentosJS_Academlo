/**** Guia de estilo de Javascript ****/

    // javascript es el lenguaje de programacion encargado de dar interactividad y dinamismo a las paginas web.
    //cunado javascript se ejecuta en el navegador web. no nesecita compilacion.

/*Convenciones de codificación para Javascript*/

/*** Comentarios ***/
// siempre es bueno comentar cada parte del codigo.
/* 
comados
de varias 
lineas
*/

/*** Sentencias ***/
// son construcciones sintacticas y comandos que realizan acciones
console.log('Hola mundo');

/*** Expresiones ***/
// es una combinacion de valores, variables, operadores o funciones que se evaluan para producir un valor.
console.log(2 + 2);

/*** Espaciado alrededor de los operadores ***/
let x = 2 + 3;
let array = [1, 2, 3, 4, 5, 6 ]

/*** Indentación ***/
// Horizontal
    let i = i

// vertical
while (i <10) {
    console.log(i);
    i++;
}
// vertical
console.log(i);

/*** Tipos de valores ***/

1, 'Hola', true, null // literal
let palabra = 'valor';// dinamicos

/*** Reglas de nomenclatura para variables y funciones***/

// notacion camelCase
let miPrimeraVariable;

function myFuction () {}

/*** Reglas de la declaración ***/
// Declaraciones Simples
let number = 1;
let arrays = [1, 2, 3, 4, 5]

// funciones
function myName(params) {

}
myName()

// bucles

for (let index = 0; index < array.length; index++) {

    const element = array[index];
    
}

// estructuras de control
if (condition) {
    console.log(true);
}else{
    console.log(false);
}

// objetos
let obj ={
    propiedad: 'valor'
}
/*** Punto y coma ***/

// se puede omitir un punto y com n la mayoria e los casos cuando existe un salto de linea,
//  javascript interpreta el salto de linea como punto y coma "implicito".

/*** Bloques de código ***/
