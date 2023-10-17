/******************************/
/* Ejercicios con funciones: */
/*****************************/

// EJERCICIO 1
/* Declara una función que reciba como parámetro name y profession y que imprima en consola: "Hi, mi name is [name] and I am a [profession]". */

function imprimirNombre(name, profession) {
  return `Hi, mi name is ${name} and I am a ${profession}`
}

console.log(imprimirNombre('Juan', 'Developer'));

// EJERCICIO 2
/*
  1 - Declara una variable global llamada greeting y colócale como valor "Hello I love to:"
  2 - Declara una función sin parámetros, dentro crea una variable local llamada hobbie y colócale como valor la actividad que más te gusta hacer.
  3 - Tu función debe mostrar por consola: "Hello I love to: [hobbie]"
*/
const greeting = 'Hello I love to:'

function getStrg() {
  const  hobbie = 'video juegos'
  return `${greeting} ${hobbie}`
}

console.log(getStrg())

// EJERCICIO 3
// Declara una función que reciba como parámetro number1 y number2 y que retorne el resultado de la suma de ambos.
function suma (number1, number2) {
  return number1 + number2
}

console.log(suma(1, 2));

// EJERCICIO 4
// Almacena en una variable el valor retornado de la función anterior y realiza una función que reciba como parámetro ese resultado y que retorne el doble del resultado.
const result = suma(2, 3)
function doble (result) {
  return result * 2
}

console.log(doble(result))

// EJERCICIO 5
/*
La siguiente función no funciona correctamente. Porque el test de abajo debe dar como resultado true ¿Puedes arreglarla?
*/
function obtenerElPrimerCaracter (texto) {
  // - Arréglalo aquí - //
  return texto[0]
}

// Los test no deben modificarse
const valorRetornado = obtenerElPrimerCaracter('JavaScript')
console.log(valorRetornado === 'J')

// EJERCICIO 6
/*
La siguiente función no funciona correctamente ¿Puedes arreglarla?
*/

function esUnNumeroPar (numero) {
  // - Arréglalo aquí - //
 return numero % 2 === 0
}

const resultado = esUnNumeroPar(24)
console.log(resultado)

// EJERCICIO 7
/*
La siguiente función recibe como parámetro una cadena de texto, tu labor es devolver el último carácter de la cadena sin importar cuál sea su longitud. Asegurate que todos los test pasen.
*/

function ultimoCaracter (texto) {
  // - Aquí va tu código - //
  return texto[texto.length - 1]
}

// Los test no deben modificarse
const test = ultimoCaracter('JavaScript')
console.log(test === 't')

const test2 = ultimoCaracter('Academlo')
console.log(test2 === 'o')

const test3 = ultimoCaracter('Generación24')
console.log(test3 === '4')

// EJERCICIO 8
// Crea una función que retorne un mensaje de bienvenida, recibiendo como parámetro el nombre de la persona, pero si no se recibe ningún parámetro debe retornar "Bienvenido Anónimo".
function welcome (nombre = 'Anónimo') {
  
  return `Bienvenido ${nombre}`
}

console.log(welcome());

// EJERCICIO 9
// Completa la función para que agregue más elementos al final del array, sin utilizar métodos para arrays. Tip: observa cuántos argumentos recibe cuando la llamamos, por ende, cuántos parametros deberá tener?
const array = ["a", "b", "c"];

function addIndex(arr, i) {
  return arr[arr.length] = i
}
// array[3] = 'd'

console.log(addIndex(array, 'd'))
console.log(array)
console.log(addIndex(array, 'e'))
console.log(array)

// EJERCICIO 10
// Define una función pura que compruebe si existe una propiedad en el objeto dado, si es así, debe retornar true y si no, false
const obj = {
  name: "Pilar",
  age: 25,
  country: "MX",
};

function existePropiedad(object ,key){
  return key in object
}

console.log(existePropiedad(obj,'name')) 
console.log(existePropiedad(obj, 'adress')) 
// EJERCICIO 11
// Define una función pura que reciba como parámetro un objeto con las propiedades nombre, edad y país y un string con el nombre de la propiedad país. La función deberá retornar el valor de la propiedad país.
const user = {
  nombre: "Erika", 
  edad: 33,
  pais: "México"
}

function getPais(obj, str){
  return obj[str]
}
console.log(getPais(user,'pais:'));
// EJERCICIO 12
const users = [
  {
    nombre: "Erik",
    edad: 29,
    correo: {
      principal: "erik@academlo.com",
      secundario: "erik@gmail.com"
    }
  },
  {
    nombre: "Georg",
    edad: 33,
    correo: {
      principal: "georg@academlo.com",
      secundario: "georg@gmail.com"
    }
  },
  {
    nombre: "Andrea",
    edad: 42,
    correo: {
      principal: "andrea@hotmail.com",
      secundario: "andrea@gmail.com"
    }
  },
  {
    nombre: "Oscar",
    edad: 31,
    correo: {
      principal: "oscar@academlo.com",
      secundario: "oscar@gmail.com"
    }
  },
  {
    nombre: "Daniela",
    edad: 22,
    correo: {
      principal: "daniela@academlo.mx",
      secundario: "daniela@uaq.mx"
    }
  },
];

//Del arreglo anterior queremos obtener un arreglo con los nombres de todos los usuarios. Realiza una función pura que devuelva el array con todos los nombres, no utilices métodos para arreglos.
const arrayUsers = []

function getNames(arr, item){
  
   return arr[item] = users[item].nombre
  //return arrayUsers.push(arr.nombre)

}
//users.forEach(getNames)
console.log(users.nombre);
 console.log(getNames(arrayUsers, 0))
 console.log(getNames(arrayUsers, 1))
 console.log(getNames(arrayUsers, 2))
 console.log(getNames(arrayUsers, 3))
 console.log(getNames(arrayUsers, 4))

console.log(arrayUsers)

//Del arreglo anterior queremos obtener un arreglo con los correos principales de todos los usuarios. Realiza una función pura que devuelva el array con todos los correos principales, no utilices métodos para arreglos.

const arrayEmails = []

function getEmails(arr, i){
  
  return arr[i] = users[i].correo.principal
 
}

console.log(getEmails(arrayEmails, 0))
console.log(getEmails(arrayEmails, 1))
console.log(getEmails(arrayEmails, 2))
console.log(getEmails(arrayEmails, 3))
console.log(getEmails(arrayEmails, 4))


console.log(arrayEmails);


// devolver la ultima palabra de un cadena de texto

function getLastWord(string){
  const prop = string.split(' ')
  return prop[prop.length - 1]
}

console.log(getLastWord('Hola soy goku'))


// devolver la segunda palabra de un cadena de texto cualquiera






