// => Ejericios de métodos en primitivos
// 1. Escribe una función que reciba un string y retorne la primera palabra de la cadena.
const str = "Hello world!"

function firstWord(text) {
  // tu código aquí
  return text.split(" ")[0]
}

console.log(firstWord(str))

// 2. Escribe una función que reciba un string y retorne la penúltima palabra de la cadena.

const str1 = 'I love programming'

function lastWord(text) {
  // tu código aquí
  return text.split(" ")[text.split(' ').length - 2]
}

console.log(lastWord(str1))

// 3. Escribe una función que reciba un string y retorne la cantidad de palabras que contiene.

const str2 = 'I am studing programming at Academlo'

function wordsCount(text) {
  // tu código aquí
  return text.split(' ').length
}

console.log(wordsCount(str2))

// 4. Escribe una función que compruebe si el correo electrónico que recibe como parámetro termina en @academlo.com

const email = "georg@academlo.com"

function isAcademloEmail(text) {
  // tu código aquí
  return text.endsWith("@academlo.com")
}

console.log(isAcademloEmail(email))

// 5. Escribe una función que reciba como parámetro una frase y una palabra y deberás reemplazar la última palabra de la frase.
const myPhrase = "I am learning JavaScript in Internet"
const myWord = "Academlo"

function replaceLastWord(phrase, word) {
  // tu código aquí
  const letterPhrase = phrase.split(' ')
  return phrase.replace(letterPhrase[letterPhrase.length-1], word)
}

console.log(replaceLastWord(myPhrase, myWord))

// 6. Escribe una función que reciba como parámetro una frase y deberás retornar la longitud de la última palabra.
const myPhrase2 = "I am learning JavaScript in Academlo"

function phraseLength(phrase) {
  // tu código aquí
  return phrase.split(' ')[phrase.split(' ').length-1].length
}

console.log(phraseLength(myPhrase2))

// 7. Declara una función que reciba como parámetro 3 cadenas de texto, deberas extraer las edades de cada una de ellas y retornar la suma de esas edades.
// La edad siempre será la antepenúltima palabra de la cadena.
const str3 = 'Hi, my name is Erik and I am 30 years old'
const str4 = 'Hi, my name is Georg and I am 33 years old'
const str5 = 'Hi, my name is Iván and I am 40 years old'

function sumarEdades (cadena, cadena2, cadena3) {
  // Tu código aquí
  const a = parseInt(cadena.split(' ')[cadena.split(' ').length - 3])
  const b =parseInt(cadena2.split(' ')[cadena2.split(' ').length - 3])
  const c = parseInt(cadena3.split(' ')[cadena3.split(' ').length - 3])
  return a + b + c
}
console.log(sumarEdades(str3, str4, str5))

// 8. Define una función que regrese un número aleatorio entre 1 y 10.
function random() {
  // tu código aquí
  return Math.floor(Math.random() * 11)
}

console.log(random())

// 9. Cuál es el resultado de las siguientes operaciones:
console.log(Math.floor(1.5)) // Respuesta: 1
console.log(Math.ceil(1.5)) // Respuesta: 2
console.log(Math.round(1.5)) // Respuesta: 2

// 10. Resuelve el siguiente problema: el formato de la hora en un reloj digital tiene este formato 00:00:00, es decir, las horas, minutos y segundos están representados por dos dígitos. ¿Cómo podríamos resolver este problema?
const hours = 3
const minutes = 7
const seconds = 2

const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`// tu código aquí
console.log(time);
