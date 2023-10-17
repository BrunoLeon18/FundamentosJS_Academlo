/****************************************/
/* FUNCIONES ==> DECLARACIÓN DE FUNCIÓN */
/****************************************/
function showGreat(name){
    return `welcome o my website, hi ${name}!`
}

console.log(showGreat("Juan"))
console.log(showGreat("celcila"))
console.log(showGreat("Jose"));


// sintaxis
//  function nombreDeLaFuncion (parametros){
    // instrucciones(codigo)
    // return
//  }

/*
function: palabra reservada
nombreDeLaFuncion: es el nombre de la funcion
parametros: son los parametros que recibe la funcion (opcional)
{} -> son los bloques de codigo que se ejecutaran cuando se llame la funcion
*/

// declaracion de funcion declarada
function great (){
    console.log('Hola');
}

// llamada a la funcion, invocacion, ejecuion
great();// se pueden ejecutar cuantas veces sea necesario

// la funcion puede o no retornar algo


// una funcion que no tiene un return devolvera undefined

console.log(great());

//hoisting en funciones declaradas
imAlive()
 function imAlive(){
    console.log('estoy funcionando');
}

// la funciones expresadas no tienen hoisting aunque se use var let o const
const greet = function imAlive(){
    console.log('soy una funcion expresada');
}

greet();

/*********************************************************/
/* FUNCIONES ==> ÁMBITO, ALCANCE, SCOPE DE LAS VARIABLES */
/*********************************************************/
// las funciones pueden acceder a las variables de alcance global y a las variables de alcamce local
// variables de bloque o locales}
function alcanceLocal() {
    const variableLocal ='Hola';
    console.log(variableLocal);
}

alcanceLocal()


// variables globales
let global = 'Hola';
function alcanceGlobal() {
    global = 'adios';
}

console.log(global);
alcanceGlobal()
console.log(global);

//locales contra globales
let variableGlobal = 1000

function localVsglobal() {
    let variableGlobal = 2000;
    console.log(variableGlobal)
    
    let local = 3000;
    console.log(local);
}
console.log(variableGlobal)

localVsglobal()

console.log(variableGlobal);

// Side effects es modificar cosas fuera del alcance de esa funcion dando como resultado efectos secundarios.
let counter = 1;

function increment(){
   return counter++;
   
}  

console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())

/****************************/
/* FUNCIONES ==> PARÁMETROS */
/****************************/
// el parametro es uno o varios valores separados por comas que se pasan de una funcion entre parentesis. las funciones pueden tener o no parámetrosson opcionales

function suma(a, b){

    // cuando la funcion se llama los valores dadosse copian y se convierten en variables locales en el ejemplo serian a y b
    return a + b;
}

console.log(suma(1, 2));// argumentos: cuando un valor es pasado a la funcion cuando esta es llamada, tambien se denomina argumento

const result = suma(5, 3);
console.log(result);

const result2 = suma(5, 9);
console.log(result2);
/***************************************/
/* FUNCIONES ==> PARAMETROS IMPLÍCITOS */
/***************************************/
function withArguments(){
    console.log(arguments);

    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments.length);
    console.log(Array.isArray(arguments))
}


withArguments(1, true , 'hola');// esto suele ser util si no sabes de antemano cuantos argumentos se pasara en la funcion

//2) ==> this: es tambien conocido como el contexto de la funcion

function withThis(){
    console.log(this);// this hace referencia al objeto global cuando la funcion es llamada como funcion (objeto windows en el navegador,en este caso nodeJs)
}

withThis();


/******************************************************/
/* FUNCIONES ==> VALORES PREDETERMINADOS O POR DEFECTO*/
/******************************************************/
// es una funcion si no se pasa un valor para el parametro, recibe el valor de undefined (indefinido).

function whitoutValue(num, num2){
    console.log(num * num2);
}

whitoutValue();
whitoutValue(2);

// usar valores predeterminados

function withDefaultValues(num = 6, num2 = 3){
    console.log(num * num2);
}

withDefaultValues();
withDefaultValues(2);
withDefaultValues(2,4);

/*********************************************/
/* FUNCIONES ==> RETORNANDO UN VALOR, RETURN */
/*********************************************/

// una funcion puede devolver un valor al codigo de llamado como resultado. con la directica return. solo existe un return por funcion, no pueden haber dos.

function salute(user){
    //return // error
    return `Hola ${user}`;
}

console.log(salute('Guillermo'));

/* FUNCIONES PURAS (inmutabilidad)  */
/* para ser puras, una funcion debe seguir estas reglas:
- Una funcion pura siempre deb devolver el mismo valor cuando se le dan las mismas entradas(parametros).
- Una funcion pura no debe tener ningun efecto secundario. */

function addNumbers(a, b){
    return a + b;
}

console.log(addNumbers(2, 2));

const arrNumbers = [1, 2, 3, 4, 5];

function pura(arr){
    return arr[0]
}

console.log(pura(arrNumbers));
console.log(arrNumbers);