/********************************/
/* BUCLES */
/*******************************/
// Los Bucles son una forma de repetir el mismo código varias veces.
// Existen 5 tipos:
// -while: La condición es comprobada antes de cada iteración
// -dowhile: La condición es comprobada después de cada iteración
// -for: la condición es comprobada antes de cada iteración con ajustes adicionales disponibles
/* Nuevos, llegaron con ECMAscript 6 */
// -for...in: se utiliza para iterar sobre las propiedades de un objeto
// -for...of: se utiliza para iterar sobre los valores de un objeto iterable (como un array)

// Importante! Si un bucle no se rompe va a generar un ciclo infinito y te aparece la famosa pantalla azul si no cuentas con una computadora muy potente, ya que ocupa los recursos de nuestra computadora

/********************************/
/* BUCLES ==> WHILE (MIENTRAS) */
/*******************************/
// While crea un bucle que ejecuta una instrucción especificada mientras cierta expresión o condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la instrucción.
/*
Sintaxis:
let i = 0 <= Inicializador
while (condicion) {
  // Bloque de código - cuerpo del bucle
  i++ <= Operación
}
*/

let num = 1;

while (num <= 10) {
  console.log(num);
  num++;
}

let numDecrement = 10;

while (numDecrement) {
  console.log(numDecrement);
  numDecrement--;
}

let reverse = -10;

while (reverse) {
  console.log(reverse);
  reverse++;
}

// Con arreglos
const frutas = ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈"];

let frutaInicial = 0;

while (frutaInicial < frutas.length) {
  console.log(frutas[frutaInicial]);
  frutaInicial++;
}

// Con un arreglo de objetos
const users = [{ name: "Juan" }, { name: "Luis" }, { name: "Said" }];

let iterador = 0;

while (iterador < users.length) {
  console.log(users[iterador]["name"]);
  iterador++;
}

// Ejemplo con varios usuarios
const usuarios = [
  {
    name: "Frabrizzio",
    age: 20,
  },
  {
    name: "Rene",
    age: 25,
  },
  {
    name: "Steven",
    age:30,
  }
];

let i = 1
const infoUsers = []
while (i < usuarios.length) {
  // infoUsers[i] = `${usuarios[i].name} tiene ${usuarios[i].age} años` => funciona unicamente si vas a recorrer desde 0
  infoUsers.push(`${usuarios[i].name} tiene ${usuarios[i].age} años`)
  i++
}

console.log(infoUsers)

// Puedo usar ciclos o bluces en todo lo que sea iterable, no sólo arrays por ejemplo un texto
const text = 'Hola'

let index = 0
while (index < text.length) {
  console.log(text[index])
  index++
}
