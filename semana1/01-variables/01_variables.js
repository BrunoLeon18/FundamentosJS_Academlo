/**********************************/
/* VARIABLES ==> VAR, LET, CONST */
/*********************************/


/**********************/
/* VARIABLES ==> VAR */
/*********************/


/**********************/
/* VARIABLES ==> LET */
/*********************/
//DECLARACION DE VARIABLES
let myName1

// inicializacion
myName1 = 'manuel';

// razon por la que permiten declarar sin inicializaar.

// re declaracion de variables

// let myName1 = 1 // error - let no permite re declarar varias veces.

// declarar e inicializar al mismo tiempo
let lastName = 'garcia';

// declaracion de multiples variables en linea
let age1, age2, hobbies

// declaracion de variables por linea
let color1 = 'blue'
let hobbie1 = 'run'

// reasignarla
myName1 = 'tatiana'
console.log(myName1);

/************************/
/* VARIABLES ==> CONST */
/***********************/

// delcaracion de const

// const myName2 // error - const no se puede declarar sin inicializarse

// declaracion e inicializacion
const age3 = 20

// declaracion de multiples const en linea
const age4 = 25, email3 = 'hola@gmail.com'


// reasignacion en const
// age3 = 30 // error - las constantes no se pueden reasignar.
// error comun
const arr = [1, 2, 3]
console.log(arr);
arr[1] = 4
console.log(arr);

// arr = {} // error
// arr = 1 // error

// redeclaracion en constnates

// const arr // las constantes no se pueden re declarar

// ambito, scope ,alcance de let y const

// bloque o local

{
    let nameUser = 'mauro'
    console.log(nameUser);
    const nombreDeUsuaario = 'juan'
    console.log(nombreDeUsuaario);
}

// global

let email1 = 'steven@gmail.com'
let nameUser = 'edwin'
 const nombreDeUsuaario = 'cecilia'
{
    console.log(email1);
}

