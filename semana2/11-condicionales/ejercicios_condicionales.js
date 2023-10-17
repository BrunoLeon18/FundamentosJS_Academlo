// 1. Usa la sentencia if para ayudar a los clientes de una pizzeria en línea a saber cuánto deben pagar por la pizza que ordenaron.

// las pizzas que tenemos disponibles son:
// 1. Pequeña: $10
// 2. Mediana: $15
// 3. Grande: $20
// 4. Familiar: $25

// En caso de que el cliente solicite una pizza que no esté disponible, debe mostrar un mensaje indicando que no está disponible.

// tu código aquí
let pizza = "familiar";
let precio;

if (pizza === "pequena") {
  precio = "$10";
} else if (pizza === "mediana") {
  precio = "$15";
} else if (pizza === "grande") {
  precio = "$20";
} else if (pizza === "familiar") {
  precio = "$25";
} else {
  precio = "No dicponible";
}

console.log(precio);

// 2. Pasa la siguiente condición a una sentencia switch
const diaDeLaSemana = "jueves";
let mostrarDia;
if (diaDeLaSemana === "lunes") {
  console.log("Es lunes");
} else if (diaDeLaSemana === "martes") {
  console.log("Es martes");
} else if (diaDeLaSemana === "miercoles") {
  console.log("Es miercoles");
} else if (diaDeLaSemana === "jueves") {
  console.log("Es jueves");
} else if (diaDeLaSemana === "viernes") {
  console.log("Es viernes");
} else if (diaDeLaSemana === "sabado") {
  console.log("Es sabado");
} else if (diaDeLaSemana === "domingo") {
  console.log("Es domingo");
} else {
  console.log("No es un día de la semana");
}

switch (diaDeLaSemana) {
  case "lunes":
    mostrarDia = "Es lunes";
    break;
  case "martes":
    mostrarDia = "Es martes";
    break;
  case "miercoles":
    mostrarDia = "Es miercoles";
    break;
  case "jueves":
    mostrarDia = "Es jueves";
    break;
  case "viernes":
    mostrarDia = "Es viernes";
    break;
  case "sabado":
    mostrarDia = "Es sabado";
    break;
  case "domingo":
    mostrarDia = "Es domingo";
    break;
  default:
    mostrarDia = "No es un dia de la semana";
    break;
}
console.log(mostrarDia);

// 3. La siguiente función debe recibir como parámetro un string con un nombre del mes y debe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido". Use la sentencia switch.
function estacion(mes) {
  // tu código aquí
  if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
    return "estamos en Verano";
  } else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
    return "estamos en Otono";
  } else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    return "estamos en Invierno";
  } else if (mes === "setiembre" || mes === "octubre" || mes === "noviembre") {
    return "estamos en Primavera";
  } else {
    return "No es un mes del ano";
  }
}

console.log(estacion("febrero"));

// 4. Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.
function doble(num) {
  if (num > 10) {
    return num;
  } else {
    return num * 2;
  }
}
console.log(doble(3));
// 5. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
function halfArray(arr) {
  // tu código aquí
  const mitad = arr.length / 2;
  if (arr.length % 2) {
    return arr[(arr.length - 1) / 2];
  } else {
    return [arr[mitad - 1], arr[mitad]];
  }
}

console.log(halfArray([1, 3, 4, 6, 5, 7, 8]));
console.log(halfArray([1, 3, 4, 5, 6, 7, 8, 9, 0, 5]));

// 6. Tenemos un array con varios colores repetidos, pero quisieramos saber cuantos colores diferentes hay en el array y que cantidad de cada color hay. Tu trabajo es crear una función que reciba un array de colores y retorne un objeto con la cantidad de cada color.
const colores = [
  "rojo",
  "verde",
  "verde",
  "azul",
  "amarillo",
  "naranja",
  "rojo",
  "amarillo",
  "rojo",
  "verde",
  "azul",
  "rojo",
];

function colors(arr) {
  const countColors = {};

  for (let i = 0; i < arr.length; i++) {
    const color = arr[i];

    if (countColors[color]) {
      countColors[color]++;
      console.log(countColors);
    } else {
      countColors[color] = 1;
      console.log(countColors);
    }
  }
  return countColors;
}

console.log(colors(colores));
// El siguiente arreglo de usuario será el que pasarás por argumento a tus funciones de los problemas 7 y 8.
const usuarios = [
  {
    nombre: "Erik",
    edad: 29,
    genero: "Hombre",
  },
  {
    nombre: "Georg",
    edad: 33,
    genero: "Hombre",
  },
  {
    nombre: "Andrea",
    edad: 42,
    genero: "Mujer",
  },
  {
    nombre: "Oscar",
    edad: 31,
    genero: "Hombre",
  },
  {
    nombre: "Daniela",
    edad: 22,
    genero: "Mujer",
  },
];

// 7. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los nombres de los usuarios que sean mujeres.
function women(users) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].genero === "Mujer") {
      result.push(users[i].nombre);
    }
  }
  return result;
}
console.log(women(usuarios));
// 8. Crea una función que reciba como parámetro un arreglo de usuarios y retorne un arreglo con todos los usuarios que esten dentro del rango de edad de 20 a 30 años.
function rangeAge(users) {
  const userAge = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].edad >= 20 && users[i].edad <= 30) {
      userAge.push(users[i]);
    }
  }
  return userAge;
}
console.log(rangeAge(usuarios));

// 9. El reto Fizz Buzz: Tenemos un array de números del 1-100, todos los que son múltiplos de 3 deben devolver Fizz,
// todos los que son múltiplos de 5 deben devolver Buzz y los que son múltiplos de ambos, es decir, 3 y 5, deben devolver Fizz Buzz.



function fizzBuzz() {
  let resultado = []

  for (let i = 1; i <= 100; i++) {
    let valor

    if (i % 3 === 0 && i % 5 === 0) {
      valor = 'Fizz Buzz'
    } else if (i % 3 === 0) {
      valor = 'Fizz'
    } else if (i % 5 === 0) {
      valor = 'Buzz'
    } else {
      valor = i
    }

    resultado.push(valor)
  }

  return resultado
}

console.log(fizzBuzz());
