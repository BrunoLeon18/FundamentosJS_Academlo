// 1- Crea una función que te ayude a obtener todos los nombres de los animales en un nuevo array:
const animals = [
  {
    name: 'Dog',
    paws: 4
  },
  {
    name: 'Duck',
    paws: 2
  },
  {
    name: 'Spider',
    paws: 8
  },
  {
    name: 'Snake',
    paws: 0
  }
]

function getNames(pets) {
  // escribe tu código aquí
  const allNames = []
  for (const animal of pets) {
    allNames.push(animal.name)
  }
  return allNames
}

console.log(getNames(animals))

// 2- Crea una función que ordene a los animales del array anterior de menor a mayor, de acuerdo al número de patas que tiene:

function sortByPaws(arr, property) {
  return arr.sort((a, b) => a[property] - b[property])
}

console.log(sortByPaws(animals, 'paws'))

function sortByPaws1(arr) {
  return arr.sort((a, b) => a.paws - b.paws)
}

console.log(sortByPaws1(animals))

// 3- Crea una función con dos parámetros: el primero recibirá el arreglo y el segundo recibirá el nombre de la fruta que se elminará. Esta función debe eliminar la fruta solicitada.
const fruits = [
  {name: 'apple', color: 'green'},
  {name: 'apple', color: 'yellow'},
  {name: 'grape', color: 'purple'},
  {name: 'grape', color: 'green'},
  {name: 'mango', color: 'green'},
  {name: 'mango', color: 'yellow'},
  {name: 'grape', color: 'green'}
]

function deleteFruit(arr, name) {
  const newArray = []
  // for (const fruit of arr) {
  //   console.log(fruit['name'])
  //   if (fruit['name'] !== name) {
  //     console.log(fruit['name'])
  //     newArray.push(fruit)
  //   }
  // }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]['name'] !== name) {
      console.log(arr[i]['name'])
      newArray.push(arr[i])
    }
  }
  return newArray
}

console.log(deleteFruit(fruits, 'grape'))

// 4- Tienes una bolsa de compras (array), pero quieres agregar tamaño a tus productos de esa bolsa (otro array). Crea una función que te ayude a mezclar ambos arreglos para lograr obtener los tamaños.

const bolsa = [
  {name: 'Balón', color: 'rojo'},
  {name: 'Carrito', color: 'azul'},
  {name: 'Muñeca', color: 'morado'}
]

// bolsa.size =

const caracteristicas = [
  {name: 'Balón', size: 'grande'},
  {name: 'Carrito', size: 'pequeño'},
  {name: 'Muñeca', size: 'mediano'}
]

function mergeProducts(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i].name === array2[j].name) {
        array1[i].size = array2[j].size
      }
    }
  }
  return array1
}

console.log(mergeProducts(bolsa, caracteristicas))

// 5- Retorna el id que se repite más veces
const servicios = [
  {name: 'Marketing', id: 10},
  {name: 'Programación', id: 11},
  {name: 'Periodismo', id: 12},
  {name: 'Redacción', id: 10},
  {name: 'Fitness', id: 12},
  {name: 'Gimnasia', id: 12},
  {name: 'Fotografía', id: 9}
]

function findMostCommonId(services) {
  const commonService = {}
  for (const service of services) {
    // commonService[service.id] = (commonService[service.id] || 0) + 1
    if (commonService[service.id]) {
      commonService[service.id]++
    } else {
      commonService[service.id] = 1
    }
  }
  console.log(commonService)

  const mostCommonService = Object.entries(commonService).sort((a, b) => b[1] - a[1])
  console.log(mostCommonService)

  return +mostCommonService[0][0]
}
console.log(findMostCommonId(servicios))

// 6- Retorna los id que se repite más veces

const servicioss = [
  {name: 'Marketing', id: 10},
  {name: 'Programación', id: 11},
  {name: 'Periodismo', id: 12},
  {name: 'Redacción', id: 10},
  {name: 'Fitness', id: 12},
  {name: 'Gimnasia', id: 12},
  {name: 'Video', id: 10},
  {name: 'Fotografía', id: 9},
  {name: 'Baile', id: 9},
  {name: 'Canto', id: 9}
]
function findMostCommonIds(services) {
  
}
console.log(findMostCommonIds(servicioss))

// 7- Encuentra al objeto por su nombre 
const objetos = [
  {
    name: "Pelota",
    color: "Blue",
    amout: 22,
  },
  {
    name: "Carrito",
    color: "Green",
    amout: 40,
  },
  {
    name: "Barbie",
    color: "Pink",
    amout: 50,
  },
  {
    name: "Canica",
    color: "Black",
    amout: 60,
  }
]

function findObject(objects, name) {
  let object
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].name === name) {
      object = objects[i] 
    }
  }
  return object
}

console.log(findObject(objetos, "Canica"));

const users = [
  { 
    name: 'Andrés', 
    email: 'andres@academlo.com', 
    channel: 'youtube', 
    application: null 
  },
  { 
    name: 'Jesús', 
    email: 'jesus@gmail.com', 
    channel: 'facebook', 
    application: { country: 'Mexico', state: 'Campeche' }
  },
  { 
    name: 'Brayan', 
    email: 'brayan@gmail.com', 
    channel: 'youtube', 
    application: { country: 'Colombia', state: 'Bogotá' }
  }
]

function getApplications(user) {
  const users1 = []
  for (let i = 0; i < user.length; i++) {
    const element = user[i];
    if (element.application) {
      users1.push(element)
    }
  }
  return users1
}

console.log(getApplications(users))

function sumEvens(start, end) {
  // escribe tu solución aquí
  
    let sum = 0;
    start++; // incrementar el inicio en 1 para no incluirlo en el rango
    while(start < end){
      if (start % 2 == 0){
        sum += start;
      }
     start++;
    }
    return sum;
  
}

console.log(sumEvens(20, 30))
// Encuenta los múltiplos de un número
// La función getMultiples(number, limit) recibe 2 números como parámetro. El segundo número recibido siempre será mayor al primero. Tu labor es encontrar y retornar un nuevo arreglo con todos los múltiplos del primer número (sin incluir este número).
function getMultiples(number, limit) {
  // escribe tu solución aquí
  const arr = [];

  for (let i = number + 1 ; i < limit; i++) {
    if (i % number === 0) {
      arr.push(i)
    }
  }
  return arr
}

console.log(getMultiples(32,100))


function countLetter(phrase, letter) {
  let count = 0
  // escribe tu solución aquí
  for (let i =0 ; i < phrase.length; i++) {
    if(phrase[i] === letter) {
      count ++
    }
    console.log(count)
  }
  return count
}

console.log(countLetter('hola mundo en javascript', 'a'))

const students = [
  { 
    name: 'Andrea', 
    email: 'andrea@gmail.com', 
    channel: 'youtube', 
    application: null 
  },
  { 
    name: 'Daniela', 
    email: 'daniela@gmail.com', 
    channel: 'youtube', 
    application: { 
      country: 'Colombia', 
      state: 'Bogotá' 
    } 
  },
  { 
    name: 'Alondra', 
    email: 'alondra@gmail.com', 
    channel: 'twitter', 
    application: { 
      country: 'Colombia', 
      state: 'Bogotá' 
    } 
  },
  { 
    name: 'Luis', 
    email: 'luis@gmail.com', 
    channel: 'twitter', 
    application: { 
      country: 'México', 
      state: 'Nuevo León' 
    } 
  }]


  function countApplicationsByChannel(students) {
    // escribe tu solución aquí
    let count = {};
    for (let i = 0; i < students.length; i++) {
      const element = students[i];
      if(element.application){
         if(count[element.channel]){
          count[element.channel]++
         }else{
          count[element.channel] = 1
         }
      }
    }
    return count
  }

  console.log(countApplicationsByChannel(students))


  const student = [
    { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
    { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
    { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
    { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
  ]
  const countries = [
    { id: 1, name: 'Mexico', },
    { id: 2, name: 'Colombia' }
  ]
  const countryName = 'Colombia'


  function countStudents(students, countries, countryName) {
    // escribe tu solución aquí
    let count = 0
    for (let i = 0; i < students.length; i++) {
      const element = students[i];
      for (let j = 0; j < countries.length; j++) {
        const item = countries[j];
        if (element.country_id === item.id ) {
          element.countriesName = item.name
          if (countryName === element.countriesName) {
            count ++
          }
        }
      }
    }
    return count
  }

  console.log(countStudents(student, countries, countryName))