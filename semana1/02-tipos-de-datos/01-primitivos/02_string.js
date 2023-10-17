/*** TIPOS DE DATOS ==> Cadenas de Texto ***/

let str1 = "estas son cmillas dobles"
let str2 = 'estas son comillas simples'
let str3 = `estas son backticks`

// uso de comillas dentro de comillas

// let str4 = 'I'm in love' ==> error
let str5 = "I'm in love with js"
let str6 = 'my favorite book is "el pricipito"'

// caracter de escape

let str7 = "My dog is \"kaiser\" "



// concatenacion en cadenas

let str8 = 'Chapulin'
let str9 = 'Colorado'

console.log(str8 + ' '+ str9);


// interpolacion de backticks, template String o template literal ${} = marcadores

console.log(`${str8} ${str9}`);

let str10 = `I'm love with JS`
let str11 = `My favorite book is 'El principito'`

// Iteracion de cadenas de texto
// las cadenas de texto son iterables, contienen indices y pueden ser recorridas

let cadenaDeTexto = 'Hola como estan?'

// como aceder a los valores

console.log(`indice 0 = ${cadenaDeTexto[0]}`);
console.log(`indice 1 = ${cadenaDeTexto[1]}`);
console.log(`indice 2 = ${cadenaDeTexto[2]}`);
console.log(`indice 3 = ${cadenaDeTexto[3]}`);
console.log(`indice 4 = ${cadenaDeTexto[4]}`);
console.log(`indice 5 = ${cadenaDeTexto[5]}`);
console.log(`indice 6 = ${cadenaDeTexto[6]}`);
console.log(`indice 7 = ${cadenaDeTexto[7]}`);
console.log(`indice 8 = ${cadenaDeTexto[8]}`);
console.log(`indice 9 = ${cadenaDeTexto[9]}`);
console.log(`indice 10 = ${cadenaDeTexto[10]}`);
console.log(`indice 11 = ${cadenaDeTexto[11]}`);
console.log(`indice 12 = ${cadenaDeTexto[12]}`);
console.log(`indice 13 = ${cadenaDeTexto[13]}`);
console.log(`indice 14 = ${cadenaDeTexto[14]}`);
console.log(`indice 15 = ${cadenaDeTexto[15]}`);


// Propiedad length

// la propiedad lentgh nos devuelve el numero de caracteres que contiene la cadena de texto.

console.log(cadenaDeTexto.length);
console.log(cadenaDeTexto[16]);

// los string son inmutables no se pueden modificar

const cadena = 'Hola chicos de la generacion27'
cadena[0] = 'a'
console.log(cadena);

const arr = ['a', 'b', 'c']
arr[0] = 'd'
console.log(arr);



