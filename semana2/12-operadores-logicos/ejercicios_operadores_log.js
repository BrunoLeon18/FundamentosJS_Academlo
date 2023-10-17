// 1. ¿Cuál es el resultado de la siguiente expresión?
console.log(null || 2 || undefined) // 2
console.log(1 || 2 || 3) // 1
console.log(1 && null && 2) // null
console.log(1 && 2) // 2
console.log(null || 2 && 3 || 4) // 3

const count = 0

console.log(null || count || 35) // 35
console.log(null && count && 35) // null
console.log(null ?? count ?? 35) // 0

// 2. Usando los operadores lógicos, escriba una expresión que devuelva true si el usuario está autenticado y si tiene acceso a la página
const user = { authenticated: true, access: true } 
const user2 = { authenticated: true, access: false }
const user3 = { authenticated: false, access: true }
const use4 = { authenticated: false, access: false }

console.log(user.authenticated && user.access) // true
console.log(user2.authenticated && user2.access) // false
console.log(user3.authenticated && user3.access) // false
console.log(use4.authenticated && use4.access) // false

console.log(user.authenticated || user.access)  // true
console.log(user2.authenticated || user2.access) // true
console.log(user3.authenticated || user3.access) // true
console.log(use4.authenticated || use4.access) // false

// 3. Resuelva el siguiente problema: Tenemos un arreglo de frutas, y queremos todas las frutas que empiecen con la letra "P" y que aparte sean de la tienda "La frutera".
// const fruits = [{ nombre: 'Uva', tienda: 'El mercado' }, { nombre: 'Pera', tienda: 'La frutera' }, { nombre: 'Manzana', tienda: 'La frutera' }, { nombre: 'Papaya', tienda: 'El mercado' }, { nombre: 'Platano', tienda: 'La frutera' }, { nombre: 'Piña', tienda: 'La frutera' }]
const tienda = 'La frutera'
const fruits = [
  { nombre: 'Uva', tienda: 'El mercado' }, 
  { nombre: 'Pera', tienda: 'La frutera' }, 
  { nombre: 'Manzana', tienda: 'La frutera' }, 
  { nombre: 'Papaya', tienda: 'El mercado' }, 
  { nombre: 'Platano', tienda: 'La frutera' }, 
  { nombre: 'Piña', tienda: 'La frutera' }
]

function frutas(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++)
   {
    if (arr[i]['nombre'].startsWith('P') && arr[i]['tienda'] === tienda ){
    newArr.push(arr[i])
      // console.log(arr[i]['nombre'].startsWith('P'));
    }
    console.log(newArr)
  }
  return newArr
  
}

console.log(frutas(fruits))


// console.log(mergeProducts(bolsa, caracteristicas))

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
  
  for(i = 0; i < services.length; i++) {
    const index = services[i]
    // commonService[service.id] = (commonService[service.id] || 0) + 1
    if (commonService[index.id]) {
        commonService[index.id]++
    } else {
        commonService[index.id] = 1
    }
  }
  console.log(commonService)

  const mostCommonService = Object.entries(commonService).sort((a, b) => b[1] - a[1])
  console.log(mostCommonService)

  return +mostCommonService[0][0]
}
console.log(findMostCommonId(servicios))


const users = [
    { name: 'Jesús', gender: 'male', age: 22 },
    { name: 'Luis', gender: 'male', age: 22 },
    { name: 'Andrés', gender: 'male', age: 49 },
    { name: 'María', gender: 'female', age: 35 }
  ]
  
  function getNames(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === str) {
            arr = arr[i]
        }
    }
    return arr
  }
  console.log(getNames(users, 'Luis'));