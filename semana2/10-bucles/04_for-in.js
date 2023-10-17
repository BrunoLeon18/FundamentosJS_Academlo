/*********************/
/* BUCLES ==> FOR-IN */
/*********************/

// for...in se utiliza para iterar sobre todas las propiedades enumerables de un objeto. Es decir, permite recorrer las propiedades de un objeto y realizar alguna acción en cada una de ellas.

// La sintaxis básica de for...in es la siguiente:

/*
for (const propiedad in objeto) {
  // cuerpo del bucle
}
*/

const user = {
  name: 'David',
  age: 22,
  email: 'david@gmail.com'
}
// console.log(user['name'])
for (const prop in user) {
  console.log(prop)
  console.log(`${prop}: ${user[prop]}`)
}

// OJO recordemos que en JS todo es un objeto, por lo que un array o un string al ser iterables también se pueden iterar con for..in , sin embargo, no es bien visto, no es buena práctica:
const text = 'Hola'
for (const letter in text) {
  console.log(text[letter])
}

const array = [1, 2, 3]
for (const item in array) {
  console.log(array[item])
}

for (const prop in user) {
  if (user.hasOwnProperty(prop)) {
    console.log(`${prop}: ${user[prop]}`)
  }
}

// Ejemplo práctico
const generaciones = {
  gen25: 50,
  gen26: 60,
  gen27: 70
}

const generaciones2 = {
  gen25: 50,
  gen26: 60,
  gen27: 70
}

function getTotal(obj) {
  const allGens = []
  for (const prop in obj) {
    allGens.push(`En la ${prop} hubo ${obj[prop]} alumnos`)
  }
  return allGens
}

console.log(getTotal(generaciones))