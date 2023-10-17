/************************************/
/* FUNCTION ==> Funciones Avanzado */
/***********************************/

/* Funciones de primera clase */

function a() {
  console.log('Hola Mundo')
}

a()

const b = a
b()

/* Funciones declaradas */
const argumento1 = 'argumento1'
const argumento2 = 'argumento2'

function nombreDeLaFuncion(param1, param2) {
  console.log(param1, param2)
}

nombreDeLaFuncion(argumento1, argumento2)

/* Funciones expresadas */
const nombreDeLaFuncion1 = function (param1, param2) {
  console.log(param1, param2)
}

nombreDeLaFuncion1(argumento1, argumento2)

/*************************************/
/* FUNCTION ==> Funciones de Flecha */
/************************************/

const sumar = (a, b) => {
  return a + b
}

console.log(sumar(2, 5))

/* Podemos pasar de esto */
const saludar = (nombre) => {
  const greats = "Hola soy "
  return greats + nombre
}

console.log(saludar('Javier'))

/* A esto */
/* Sin llaves */
const saludando = nombre => `Hola ${nombre}`

console.log(saludando('Steven'))

/* Con llaves*/
const presentar = (nombre, edad) => {
  let texto = `Hola ella es ${nombre}`
  const frase = (texto += `, y tiene ${edad} años`)
  return frase
}

console.log(presentar('Lau', 15));

/*************************************************************************/
/* FUNCTION ==> Funciones IIFE (Immediately Invoked Function Expression) */
/*************************************************************************/

(function (nombre) {
  console.log(`Hola ${nombre}`)
})('Guido');

/* Con arrow function */
((saludo, nombre) => {
  console.log(`${saludo} ${nombre}`)
})('Hola', 'Marcos');

(nombre => {console.log(nombre)})('Rene')

/****************************************/
/* FUNCTION ==> Funciones Constructoras */
/****************************************/
function Animalito(name, type) {
  this.name = name;
  this.type = type

  this.sayHello = function () {
    console.log(`Hola, soy un ${this.type} llamado ${this.name}`)
  }
}

const dog = new Animalito('Oogie', 'perro')
dog.sayHello()

/* Clases */
class Animal {
  constructor (name, type) {
    this.name = name;
    this.type = type
  }

  sayHello = function () {
    console.log(`Hola, soy un ${this.type} llamado ${this.name}`)
  }
}

const dog1 = new Animal('Kaiser', 'perro')
dog1.sayHello()