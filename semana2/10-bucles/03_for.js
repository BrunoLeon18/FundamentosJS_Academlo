/*******************/
/* BUCLES ==> FOR */
/******************/
// El bucle for es más complejo, pero también el más usado.

/*
Sintaxis:
for (inicialización let i = 0; condición i < 10; operación i++) {
  // cuerpo del bucle
}
*/

/*
Vamos a examinar la declaración for parte por parte:
1. (inicialización) se ejecuta una vez al principio del bucle.
2. (condición) se comprueba antes de cada iteración. Si es falsa, el bucle finaliza.
3. (código) se ejecuta una y otra vez mientras la condición sea verdadera.
4. (operación) se ejecuta después del cuerpo al final de cada iteración del bucle.
*/

for (let iniciarEn = 1; iniciarEn <= 10; iniciarEn++) {
  console.log(iniciarEn)
}

for (let iniciarEn = 10; iniciarEn; iniciarEn--) {
  console.log(iniciarEn)
}

for (let iniciarEn = -10; iniciarEn; iniciarEn++) {
  console.log(iniciarEn)
}

// Ejemplo practico
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

const infoUsers = []
for (let i = 0; i < usuarios.length; i++) {
  infoUsers.push(`${usuarios[i].name} tiene ${usuarios[i].age} años`)
}
console.log(infoUsers)

// El algoritmo general del bucle funciona de esta forma:
/*
  inicialización
  --> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
  --> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
  --> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
  --> si condición ya no se cumple --> termina el bucle
*/

// Puedo usar ciclos o bluces en todo lo que sea iterable, no sólo arrays por ejemplo un texto
const text = 'Hola'

for (let i = 0; i < text.length; i++) {
  console.log(text[i])
}

// Rompe el bucle con break
// Cuando la condición se vuelve falsa se sale de un bucle, Pero podemos forzar una salida en cualquier momento usando la directiva especial break.

for (let i = 1; i < 50; i++) {
  console.log(i)
  if (i === 8) {
    break
  }
  console.log(i)
}

// Continua con la siguiente iteración con continue
// La directiva continue es una “versión más ligera” de break. No detiene el bucle completo. En su lugar, detiene la iteración actual y fuerza al bucle a comenzar una nueva (si la condición lo permite).

// pares
for (let i = 1; i <= 20; i++) {
  console.log(i)
  if (i % 2) {
    continue
  }
  console.log(i)
}

// impares
for (let i = 0; i <= 20; i++) {
  console.log(i)
  if (i % 2 === 0) {
    continue
  }
  console.log(i)
  
}

// porque psa lo anterior?
console.log(1 % 2)
console.log(2 % 2)
console.log(3 % 2)
console.log(4 % 2)
console.log(5 % 2)
console.log(6 % 2)
console.log(3 % 3)

// Return VS Break

// return => se utiliza para salir de una función y devolver un valor. Si lo que se desea es salir del bucle y devolver un valor, entonces se debe usar return. 

function findIndex(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i
    }
  }
  return 'No existe ese número en el array'
}

const arr = [1, 2, 3, 4]
console.log(findIndex(arr, 3))
console.log(findIndex(arr, 30))

// break => se utiliza para salir de un bucle. Si lo que se desea es salir del bucle sin devolver un valor, entonces se debe usar break.
function findFirstEven(arr) {
  let evenNumber
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumber = `El primer número par de tu array es: ${arr[i]}`
      break
    }
  }
  return evenNumber
}

console.log(findFirstEven(arr))

/******* BREAK Y CONTINUE SÓLO FUNCIONAN CON FOR SIMPLE, NO CON FOR ANIDADOS *******/

//Qué son los for anidados?
// for anidados
// un for dentro de otro for

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i: ${i}, j: ${j}`)
  }
}

/*
i:1
  j:1
i:1
  j:2
i:1
  j:3
i:2 
  j:1
i:2
  j:2
i:2
  j:3
i:3
  j:1
i:3
  j:2
i:3
  j:3
*/

// Con ejemplo práctico
const usersList = [{id: 1}, {id: 2}]
const assistanceList = [{user_id: 2, active: true}, {user_id: 1, active: false}]

function usersAssistance(users, assistance) {
  
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < assistance.length; j++) {
      if (users[i].id === assistance[j].user_id) {
        users[i].active = assistance[j].active
      }
    }
  }

  return users
}

console.log(usersAssistance(usersList, assistanceList))
console.log(usersList)

// Entonces cómo fuerzo el fin de la iteración, cómo rompo el ciclo en un for anidado?
// Etiqueta y : => el nombre puede ser el que queramos, pero suele usarse con la palabra exit.

exit: for (let i = 1; i <= 3; i++) {
  console.log(i)
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break exit
    }
    console.log(j)
  }
}

users = [
  { name: "Jesús", email: "jesus@academlo.com", age: 20 },
  { name: "Andrés", email: "andres@academlo.com", age: 30 },
  { name: "Brayan", email: "brayan@academlo.com", age: 40 }
]

function getEmails(users) {
  // escribe tu solución aquí
let newArr = []
for(i = 0; i < users.length; i++){
  newArr.push(users[i].email)
 }
  return newArr
}

console.log(getEmails(users));

// encontrar en el arreglo al usuario que tenga el correo recibido y eliminarlo, finalmente deberás retornar el arreglo sin el usuarios eliminado.
function deleteUsers(users, email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      users.splice(i, 1)
    }
  }
  return users
}

console.log(deleteUsers(users, 'jesus@academlo.com'));
//console.log(users.splice(1, 1));
console.log(users);



users = [
  { name: 'Jesús', email: 'jesus@academlo.com' },
  { name: 'Luis', email: 'luis@gmail.com' }
]

attendances = [
  { email: 'luis@gmail.com', attendance: false },
  { email: 'jesus@academlo.com', attendance: true }
]

function mergeData(users, attendances) {
  // escribe tu solución aquí
  for (let i = 0; i < users.length; i++) {
  for (let j = 0; j < attendances.length; j++) {
    if (users[i].email === attendances[j].email) {
      users[i].attendance = attendances[j].attendance
    }
  }
}
return users
}

console.log(mergeData(users, attendances));
console.log(users);
