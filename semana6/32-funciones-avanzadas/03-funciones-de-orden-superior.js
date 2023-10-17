/*********************************************/
/* FUNCTION ==> Funciones de Orden Superior */
/*******************************************/

/* Funciones que llaman a otras funciones como argumento (Abstracción) o que devuelven otras funciones (closures) */


/* Funciones que reciben funciones como argumento de entrada */

/* Métodos de orden superior*/
/* Estos métodos suelen llevar tres parámetros:
-callback: Este callback recibe 3 argumentos :
-elemento: El elemento actual que está iterando.
-index: El indice del elemento actual.
-array: El array que está siendo iterado
*/

const myArray = [1, 2, 3, 4]

const metodo = {
  recorrer: function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr)
    }
  }
}

metodo.recorrer(myArray, (element, index, arr) => {
  console.log(element)
  console.log(index)
  console.log(arr)
})

Array.prototype.recorrer = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

myArray.recorrer((element, index, arr) => {
  console.log(element)
  console.log(index)
  console.log(arr)
})

/* Primero recordemos cómo le hacíamos antes del ForEach */

/* for */
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}

/* for of */
for (const number of myArray) {
  console.log(number)
}

/*** forEach ==> Iteración: ejecuta la función indicada una vez por cada elemento del array. ***/

myArray.forEach(element => {element})
/* Ejemplo práctico con forEach */
// Encuentra a las mascotas que tienen dueño
const pets = [
  {
    name: "Oogie",
    petOwner: null,
  },
  {
    name: "Kaiser",
    petOwner: 'Juan',
  },
  {
    name: "Koki",
    petOwner: 'Laura',
  },
  {
    name: "Tequila",
    petOwner: null,
  },
]

const petsWithOwner = []
pets.forEach(pet => pet.petOwner ? petsWithOwner.push(pet) : petsWithOwner);
console.log(petsWithOwner)

/*** find ==> Buscar: busca el primer elemento que cumpla con la condición indicada. 
 * Si devuelve true, la búsqueda se detiene y el item es devuelto. Si no encuentra nada, entonces devuelve undefined. ***/

/* Ejemplo práctico con find */
const nums = [5, 12, 8, 130, 44]

const encontrado = nums.find(element => element >= 12)

console.log(encontrado)

/*** findIndex ==> Buscar Índice: es esencialmente lo mismo que find, 
 * pero devuelve el índice donde el elemento fue encontrado en lugar del elemento en sí y devuelve -1 cuando no encuentra nada. ***/

const indexEncontrado = nums.findIndex(element => element > 12)
console.log(indexEncontrado)

/*** filter ==> Buscar todas las coincidencias: devuelve un nuevo array con todos los elementos encontrados que cumplan la condición implementada
 *  por la función dada. Si ningún elemento cumple la condición, se devolverá un array vacío. ***/

const encontrados = nums.filter(element => element >= 12)
console.log(encontrados)

/* Ejemplo práctico con filter */
// Elimina a los usuarios que cuenten con correo de Academlo y sean mayores de 30 años
const usuarios = [
  {
    nombre: "Erik",
    edad: 29,
    correo: "erik@academlo.com",
  },
  {
    nombre: "Georg",
    edad: 33,
    correo: "georg@academlo.com",
  },
  {
    nombre: "Andrea",
    edad: 42,
    correo: "andrea@hotmail.com",
  },
  {
    nombre: "Oscar",
    edad: 31,
    correo: "oscar@academlo.com",
  },
  {
    nombre: "Daniela",
    edad: 22,
    correo: "andrea@uaq.mx",
  },
];

const userAcademlo = usuarios.filter(user => user.correo.endsWith('@academlo.com') && user.edad >= 30)
console.log(userAcademlo)

/*** map ==> Transformar: es una forma de iterar sobre un array, llama a la función para cada elemento y devolver un nuevo array con los resultados aplicados a cada uno de sus elementos de la función dada. ***/
const numbers = [1, 5, 10, 15]

const doubles = numbers.map(num => num * 2)
console.log(doubles)

/* Ejemplo práctico */
// Regresa todos los correos en un arreglo
const users = [
  { name: "Erik", email: "erik@academlo.com", age: 20 },
  { name: "Georg", email: "georg@academlo.com", age: 30 },
  { name: "Daniel", email: "daniel@academlo.com", age: 40 },
];

const emails = users.map(user => user.email)
console.log(emails)

/*** reduce ==> Recucir: itera sobre un array, llama a la función para cada elemento y devuelve un resultado final ***/
/* sintaxis:
array.reduce((acumulador, elemento, index, array) => ..., valorInicial)
/* A diferencia de los métodos anteriores, reduce recibe cinco argumentos:
- elemento: El elemento actual.
- index: El índice del elemento actual.
- array: Es el array mismo que está siendo recorrido. 
- acumulador: Aquí se irá acumulando cada valor modificado en los elementos, siendo éste el valor final, el resultado
-valorInicial: Es el valor inicial del acumulador, si no se proporciona el primer elemento del array, el valor Inicial será utilizado(es opcional)*/

/* Ejemplo sumando los valores de un array */
const sumandoValores = numbers.reduce((acc, number) => acc + number)
console.log(sumandoValores)

/* Ejemplo con ejercicio visto anteriormente */
// Encuentra a los usuarios que tienen edad par y suma sus edades
const usersAges = [
  {
    name: "Pepe",
    age: 19,
  },
  {
    name: "Juan",
    age: 20,
  },
  {
    name: "Laura",
    age: 23,
  },
  {
    name: "Kike",
    age: 26,
  },
  {
    name: "Alejandra",
    age: 30,
  },
  {
    name: "Sofia",
    age: 27,
  },
  {
    name: "Luis",
    age: 50,
  },
  {
    name: "Alberto",
    age: 41,
  }
]

const sumAges = usersAges.reduce((acc, user) => user.age % 2 === 0 ? acc + user.age : acc, 0)
console.log(sumAges)
const emails3 = []
usersAges.forEach( user => user.name.startsWith('A') ? emails3.push(user): user)
console.log(emails3);

/* Closures */
function saludar() {
  return function () {
    return 'Hola'
  }
}

console.log(saludar()())

/* La forma más común de trabajar con la closures es: */

function saludar1(nombre) {
  return function () {
    return `Hola ${nombre}`
  }
}

const saludo = saludar1('Pedro')
console.log(saludo())

/* Veamoslo con un contador */
function crearContador() {
  let contador = 0
  function incrementar() {
    return contador++
  }
  return incrementar
}

const contador = crearContador()
console.log(contador())
console.log(contador())
console.log(contador())
console.log(contador())

const contador1 = crearContador()
console.log(contador1())
console.log(contador1())
console.log(contador1())