// 1. Crea una función que cree un arreglo con los números del 1 al 400

function number(array) {
  const arr = []
  for (let i = 1; i <= 400; i++) {
    arr.push(i)
  }
  return arr
}

console.log(number());

// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos),
//  por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.
function getNumber(num, num1) {
  const arr = []
  for (let i = num; i <= num1; i++) {
    arr.push(i)
  }
  return arr
}

console.log(getNumber(2,8))
// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,45,56];

function sumaNumber(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
   sum += arr[i]
  }
  return sum
}

console.log(sumaNumber(numeros))



// El siguiente objeto se utilizará como argumento para resolver los ejercicios 4, 5, 6 y 7:
const usuarios = [
  {
    nombre: "Erik",
    edad: 29,
    correo: "erik@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/erik" },
      { nombre: "twitter", url: "twitter/erik" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Georg",
    edad: 33,
    correo: "georg@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/georg" },
      { nombre: "twitter", url: "twitter/georg" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Andrea",
    edad: 42,
    correo: "andrea@hotmail.com",
    social: [
      { nombre: "facebook", url: "facebook/andrea" },
      { nombre: "twitter", url: "twitter/andrea" },
    ],
    genero: "Mujer",
  },
  {
    nombre: "Oscar",
    edad: 31,
    correo: "oscar@academlo.com",
    social: [
      { nombre: "facebook", url: "facebook/oscar" },
      { nombre: "twitter", url: "twiter/oscar" },
    ],
    genero: "Hombre",
  },
  {
    nombre: "Daniela",
    edad: 22,
    correo: "andrea@uaq.mx",
    social: [
      { nombre: "facebook", url: "facebook/andrea" },
      { nombre: "twitter", url: "twitter/andrea" },
    ],
    genero: "Mujer",
  },
];

// 4. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con los correos de los usuarios.

function getEmail(array) {
  const emails = []
  for (let i = 0; i < array.length; i++) {
    emails.push(array[i].correo)
 }
 return emails
}

console.log(getEmail(usuarios))

// 5. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todas las urls de las cuentas de facebook.

function getUrls(users) {
  const urls = []
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].social.length; j++) {
      if(users[i].social[j].nombre === 'facebook'){
        urls.push(users[i].social[j].url)
      }
    }
 }
 return urls
}

console.log(getUrls(usuarios));
// 6. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los géneros de los usuarios.
function generos(users) {
  const geners = []
  for (let i = 0; i < users.length; i++) {
    geners.push(`${users[i].nombre}: ${users[i].genero}`)
  }
  return geners
}

console.log(generos(usuarios))
// 7. Crea una función que reciba como parámetro un arreglo de usuarios y retorne la suma de todas las edades de los usuarios.
function sumaEdades(users) {
  let suma = 0
  for (let i = 0; i < users.length; i++) {
    const age = users[i].edad
    suma += age
  }
  return suma
}

console.log(sumaEdades(usuarios))
// 8. Crea una función que reciba un objeto como parámetro e itere con for..in sobre las propiedades y sume sus valores:
const obj = {
  a: 1,
  b: 2,
  c: 3
};

function sumaProp(users) {
  let sum = 0
  for (const prop in users) {
   sum += users[prop]
  }
  return sum
}

console.log(sumaProp(obj))

// 9. Crea una función que reciba un objeto como parámetro e itere con for..in sobre las propiedades y las pinte guarde en un array, tanto nombre como población, por ejemplo: La población de Londres es de 8981 mil habitantes.
const poblacion = {
  Londres: 8981,
  París: 2141,
  Madrid: 3223,
  Berlín: 3769,
  Roma: 2871,
};


function getCity(obj) {
  const city = []
  for (const key in obj) {
   city.push(`La poblacion de ${key} es de ${obj[key]} mil habitantes`)
  }
  return city
}

console.log(getCity(poblacion))