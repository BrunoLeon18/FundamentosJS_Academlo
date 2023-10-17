/******************************************/
/* MÉTODOS ==> CADENAS DE TEXTO (STRINGS) */
/******************************************/
// Los métodos de strings son métodos que se pueden usar con cadenas de texto

// ITERACIÓN DE CADENAS
const cadenaDeTexto = 'Hola soy una cadena de texto'

console.log(cadenaDeTexto.length) // 28
console.log(cadenaDeTexto[cadenaDeTexto.length - 1]) // 'o'

console.log(cadenaDeTexto[0]) // H
console.log(cadenaDeTexto[4]) // ' '
console.log(cadenaDeTexto[28]) // undefined

// charAt(índice) Devuelve el carácter en la pisición especificada, si no existe devuelve una cadena vacia.
console.log(cadenaDeTexto.charAt()) // Si no se le asigna ningún valor, lo toma como 0 = H
console.log(cadenaDeTexto.charAt(1)) // 0 
console.log(cadenaDeTexto.charAt(28)) // ' '
console.log(cadenaDeTexto.charAt(-1)) // ' ' Su desventaja es que no puede utilizar valores negativos, lo toma como si no existiese

// at(indíce) - Devuelve el carácter en la posición especificada, si no existe devuelve undefined. Este método permite enteros positivos y negativos.
console.log(cadenaDeTexto.at()) // Si no se le asigna ningún valor, lo toma como 0 = H 
console.log(cadenaDeTexto.at(-1)) // o
console.log(cadenaDeTexto.at(-2)) // t
console.log(cadenaDeTexto.at(28)) // undefined Desventaja, cuando un índice no existe, regresa undefined

// indexOf(valor, indíce) - Devuelve la posición del primer carácter de la cadena especificada, si no existe devuelve -1.
console.log(cadenaDeTexto.indexOf()) // Si no le paso valor, devuelve -1
console.log(cadenaDeTexto.indexOf('c')) // 13
console.log(cadenaDeTexto.indexOf('H')) // 0
console.log(cadenaDeTexto.indexOf('h')) // -1 No distingue entre mayúsculas y minñusculas, debe ser literal el valor buscado
console.log(cadenaDeTexto.indexOf('d')) // 15 cuando tenemos dos valores iguales nos devuelve el índice del primero que encuentra
console.log(cadenaDeTexto.indexOf('d', 16)) // 20
console.log(cadenaDeTexto.indexOf(' ')) // 4
console.log(cadenaDeTexto.indexOf('z')) // -1

// includes(valor, indíce) - Devuelve true si la cadena especificada está contenida en la cadena, o false si no está. Es para comprobar.
console.log(cadenaDeTexto.includes()) // Si no le paso valor, devuelve false
console.log(cadenaDeTexto.includes('hola')) // false No distingue entre mayúsculas y minñusculas, debe ser literal el valor buscado
console.log(cadenaDeTexto.includes('Hola')) // true
console.log(cadenaDeTexto.includes('de')) // true
console.log(cadenaDeTexto.includes('de', 22)) // false
console.log(cadenaDeTexto.includes('de', 20)) // true
console.log(cadenaDeTexto.includes('mas')) // false

// startsWith(valor, indíce) - Devuelve true si la cadena especificada está al inicio de la cadena, o false si no está.
console.log(cadenaDeTexto.startsWith('Hola')) // true
console.log(cadenaDeTexto.startsWith('hola')) // false No distingue entre mayúsculas y minñusculas, debe ser literal el valor buscado
console.log(cadenaDeTexto.startsWith('soy')) // false
console.log(cadenaDeTexto.startsWith('soy', 5)) // true

// endsWith(valor, indíce) - Devuelve true si la cadena especificada está al final de la cadena, o false si no está.
console.log(cadenaDeTexto.endsWith('Hola')) // false
console.log(cadenaDeTexto.endsWith('texto')) // true
console.log(cadenaDeTexto.endsWith('de')) // false
console.log(cadenaDeTexto.endsWith('de', 22)) // true
console.log(cadenaDeTexto.endsWith(' ', 23)) // true

/* Mayúsculas y minúsculas */
// toUpperCase() - Devuelve la cadena en mayúsculas.
console.log(cadenaDeTexto.toUpperCase()) // Me devuelve toda la cadena en mayúsculas
console.log(cadenaDeTexto[1].toUpperCase()) // O

// toLowerCase() - Devuelve la cadena en minúsculas.
console.log(cadenaDeTexto.toLowerCase())// Me devuelve toda la cadena en minúsculas
console.log(cadenaDeTexto[0].toLowerCase())// h

/* Extraer un trozo de una cadena */
// substring(indíceInicial, indíceFinal) - Devuelve una subcadena de la cadena.
console.log(cadenaDeTexto.substring()) //Si no le paso ningún valor, me retorna toda la cadena, lo toma como 0
console.log(cadenaDeTexto.substring(0, 3)) // Hol
console.log(cadenaDeTexto.substring(0, 4)) // Hola
console.log(cadenaDeTexto.substring(5, 8)) // Hola
console.log(cadenaDeTexto.substring(5)) // soy una cadena de texto => Si yo unicamente coloco un índice me traera del indice al final de la cadena de texto
console.log(cadenaDeTexto.substring(5, 5)) // si coloco el mismo ínidice en ambos argumentos, me traerá una cadena vacía
console.log(cadenaDeTexto.substring(0, 4)) // Hola 
console.log(cadenaDeTexto.substring(4, 0)) // Hola
console.log(cadenaDeTexto.substring(8, 5)) // soy
console.log(cadenaDeTexto.substring(-4)) // Si yo coloco un número negativo es como si fuese cero
console.log(cadenaDeTexto.substring(28)) // Si coloco un índice que no existe, te retorna un string vacío

// slice(indíceInicial, indíceFinal) - Devuelve una subcadena de la cadena. // A diferencia de substring sí permite números negativos
console.log(cadenaDeTexto.slice()) //Si no le paso ningún valor, me retorna toda la cadena, lo toma como 0
console.log(cadenaDeTexto.slice(0, 3)) // Hol
console.log(cadenaDeTexto.slice(0, 4)) // Hola
console.log(cadenaDeTexto.slice(5)) // soy una cadena de texto => Si yo unicamente coloco un índice me traera del indice al final de la cadena de texto
console.log(cadenaDeTexto.slice(5, 5)) // si coloco el mismo ínidice en ambos argumentos, me traerá una cadena vacía
console.log(cadenaDeTexto.slice(4, 0)) // si coloco el mismo ínidice en ambos argumentos, me traerá una cadena vacía
console.log(cadenaDeTexto.slice(28)) // // Si coloco un índice que no existe, te retorna un string vacío
console.log(cadenaDeTexto.slice(5, -6)) // soy una cadena de

// División de cadenas

// split(separador, limite) - Devuelve un array con las partes de la cadena que se separan por el separador especificado.
console.log(cadenaDeTexto.split()) // Si no coloco valor me devuelve todo el texto en un array
console.log(cadenaDeTexto.split(' ')) // 
console.log(cadenaDeTexto.split('')) // 
console.log('este-es-un-texto'.split('-')) // 
console.log('27/12/23'.split('/')) // 
console.log('27*12*23'.split('*')) // 
console.log(cadenaDeTexto.split(' ', 2)) // 
console.log(cadenaDeTexto.split(' ', -1)) // No reconoce números negativos

console.log(cadenaDeTexto.split(' ').at(-1))
console.log(cadenaDeTexto.split(' ').at(0))

// Recorte de espacios en blanco
// trim() - Devuelve una cadena con los espacios en blanco eliminados de la izquierda y derecha. Es decir, el del principio y el del final.
console.log('/*', '     Hola          ', '*/') // /*              Hola            */
console.log('/*', '     Hola          '.trim(), '*/') // /*Hola*/

// Búsqueda y sustitución de valores de cadenas
// replace(valor, nuevoValor) - Devuelve una nueva cadena con una o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por el nuevo valor.
console.log(cadenaDeTexto.replace('Hola', 'Adiós')) // Adiós soy una cadena de texto
console.log(cadenaDeTexto.replace('Hola', 'Adiós').replace('soy', 'eres')) // Adiós eres una cadena de texto

//La ventaja de replace es que se pueden pasar expresiones regulares:
// g - Reemplaza todas las apariciones del valor especificado.
// i - Ignora mayúsculas y minúsculas.

console.log('El Perro grande, ladro al perro chico junto al otro perro'.replace(/perro/gi, 'gato').replace('ladro', 'mordio'))

// Repetición
// repeat(n) - Devuelve una cadena repetida n veces.
const str1 = 'Hola mundo '
console.log('Hola '.repeat(4)) // HolaHolaHolaHola
console.log(str1.repeat(4)) // 

//padStart(longitud, cadena) Rellena un string con otra string hasta que alcanza la longitud dada. El relleno se aplica desde el extremo izquierdo de la string

const h = '5'
const m = '6'
const s = '2'

console.log(`${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`) // 05:06:02

// El método toString() devuelve una cadena (Todos los objetos tienen un método toString). 
const num = 15
console.log(typeof num.toString())
const boolean = true
console.log(typeof boolean.toString())
const nullPrimitivo = null
// console.log(typeof nullPrimitivo.toString())
const undefinedPrimitivo = undefined
// console.log(typeof undefinedPrimitivo.toString())

// padEnd(longitud, cadena) Rellena un string con otra string hasta que alcanza la longitud dada. El relleno se aplica desde el extremo derecho de la string.
console.log(''.padEnd(10, '*')) // ***********
console.log('contraseña'.padEnd(10, '*'))















































