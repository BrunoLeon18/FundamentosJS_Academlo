/*********************/
/* BUCLES ==> FOR-OF */
/*********************/
// for...of se utiliza para iterar sobre elementos iterables y permite recorrer cada uno de los elementos en orden.

// La sintaxis básica de for...of es la siguiente:

/*
for (item of iterable) {
  // cuerpo del bucle
}
*/

const fruits = ['apple', 'orange', 'banana']

for (const fruit of fruits) {
  console.log(fruit)
}
let fruit = []
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

// OJO no recorre objetos
// const generaciones2 = {
//   gen25: 50,
//   gen26: 60,
//   gen27: 70
// }

// for (const gen of generaciones2) {
//   console.log(gen)
// }

const text = 'Hola Mundo'

for (const letter of text) {
  console.log(letter)
}

// Ejemplo práctico 
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

function getNames(arr, prop) {
  const namesUsers = []
  for (const user of arr) {
    namesUsers.push(user[prop])
  }
  return namesUsers
}

console.log(getNames(usuarios, 'name'))