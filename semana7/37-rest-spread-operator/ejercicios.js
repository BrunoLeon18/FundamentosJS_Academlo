/***rest operator***/

// 1- Haz una suma con arguments y con rest, observa cuáles son las diferencias

function suma(a, b) {
  console.log(arguments)
  let suma = 0
  for (const num of arguments) {
    console.log(num)
    suma += num
  }

  return suma
}

console.log(suma(1, 2, 3, 4, 5, 6))

function sumaRest(...rest) {
  console.log(rest)
  let suma = 0
  for (const num of rest) {
    console.log(num)
    suma += num
  }

  return suma
}

console.log(sumaRest(1, 2, 3, 4, 5, 6))

// 2- Haz una función que reciba como parámetro nombre y edad, y muéstralo por consola
// si la función recibe más de esos dos parámetros lo que debes hacer es mostrarlo en una lista

function mostrarNombreEdad(nombre, edad, ...otros) {
  console.log(`Nombre: ${nombre}`);
  console.log(`Edad: ${edad}`);

  if (otros.length > 0) {
    console.log('Otros parámetros:');
    for (let i = 0; i < otros.length; i++) {
      console.log(otros[i]);
    }
  }
}

mostrarNombreEdad('Juan', 25);
mostrarNombreEdad('María', 30, 'Programadora', 'Casada');

function mostrarInfo(name, age, ...moreInfo) {
  if (moreInfo.length) {
    console.log(name, age, ...moreInfo)
  } else {
    console.log(name, age)
  }
  
}

mostrarInfo('Juan', 25);
mostrarInfo('María', 30, 'Programadora', 'Casada');

// 3- Haz una función que reciba n parámetros y que retorne un arreglo [[1,2],'ale', false, null, [2,3,4]]

function retornarArreglo(...params) {
  return params
}

console.log(retornarArreglo([1, 2], 'ale', false, null, [2, 3, 4]))

// 4- Haz una función que reciba n parámetros y que retorne un arreglo de una sola dimensión [1,2,'ale', false, null, 2,3,4 ]
// PISTA: Implementa también el rest

function nParams(...rest) {
  const newArr = []

  rest.forEach(param => {
    if (param.length > 1) {
      newArr.push(...param)
    } else {
      newArr.push(param)
    }
  })

  return newArr
}

console.log(nParams([1, 2], 'ale', false, [2, 3, 4]))


/***spread operator***/

// 1- Haz una función que reciba dos arreglos como parámetros y retorne un solo arreglo [1,2,3],[4,5,6] => [1,2,3,4,5,6]

function concatenarArreglos(arr1, arr2) {
  return [...arr1, ...arr2];
}

const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];
const resultado = concatenarArreglos(arreglo1, arreglo2);
console.log(resultado);

// 2- Haz una función que reciba un arreglo tipo [['h', 'o', 'l', 'a', ' '], ['m', 'u', 'n', 'd', 'o']] y devuelva hola mundo

function unirArreglos(arr) {
  const joinArray = [...arr[0], ...arr[1]]
  return joinArray.join('')
}

const arreglo = [['h', 'o', 'l', 'a', ' '], ['m', 'u', 'n', 'd', 'o']]
const resultado5 = unirArreglos(arreglo)

console.log(resultado5)

// 3- Haz una función que reciba n parámetros y que retorne un arreglo de una sola dimensión [1,2,'ale', false, null ]

function nParams(...rest) {
  const newArr = []

  rest.forEach(param => {
    if (param.length > 1) {
      newArr.push(...param)
    } else {
      newArr.push(param)
    }
  })

  return newArr
}

console.log(nParams([1, 2], 'ale', false, [2, 3, 4]))
