/***************************************/
/* CONDICIONALES ==> SENTENCIA SWITCH */
/**************************************/
// La sentencia switch es una forma de evaluar una condición y ejecutar una secuencia de instrucciones dependiendo de la condición.

// Sintaxis
/*
switch (expresión) { // El valor de la expresión es comparado contra el valor del primer caso, luego contra el segundo y así sucesivamente, todo esto bajo una igualdad estricta.
  case valor1: // Si la igualdad es ncontrada, switch empieza a ejecutar el código iniciado por el primer case correspondientes, hasta el break más cercano (o hasta el final del switch)
    bloque de código
    break
  case valor2:
    bloque de código
    break
  default: // Si no se cumple ningún caso entonces el código default es ejecutado (si existe)
    bloque de código
  }
*/

const diaDeLaSemana = 'jueves'
let mostrarDia

switch (diaDeLaSemana) {
  case 'lunes':
    mostrarDia = 'Es lunes'
    break;
  case 'martes':
    mostrarDia = 'Es martes'
    break;
  case 'miércoles':
    mostrarDia = 'Es miércoles'
    break;
  case 'jueves':
    mostrarDia = 'Es jueves'
    break;
  case 'viernes':
    mostrarDia = 'Es viernes'
    break;
  case 'sábado':
    mostrarDia = 'Es sábado'
    break;
  case 'domingo':
    mostrarDia = 'Es domingo'
    break;

  default:
    mostrarDia = 'No es un día de la semana'
}

console.log(mostrarDia)

const dias = {
  lunes: 'Es lunes',
  martes: 'Es martes',
  miercoles: 'Es miercoles',
  jueves: 'Es jueves',
  viernes: 'Es viernes',
  sabado: 'Es sabado',
  domingo: 'Es domingo',
}

if (dias[diaDeLaSemana]) {
  console.log(dias[diaDeLaSemana])
} else {
  console.log('No es un día de la semana')
}

// Agrupamiento de case
// La habilidad para “agrupar” cases es un efecto secundario de cómo trabaja switch sin break.

const mesActual = 'noviembre'
const mesActual1 = 'diciembre'
let estacion

switch (mesActual) {
  case 'enero':
  case 'febrero':
  case 'marzo':
    estacion = 'Invierno'
    break;
  case 'abril':
  case 'mayo':
  case 'junio':
    estacion = 'Primavera'
    break;
  case 'julio':
  case 'agosto':
  case 'septiembre':
    estacion = 'Verano'
    break;
  case 'octubre':
  case 'noviembre':
  case 'diciembre':
    estacion = 'Otoño'
    break;

  default:
    estacion = 'No es un mes'
}

console.log(estacion)

// Comparación de valores con igualdad estricta
// Todos los switch funcionan con igualdad estricta
console.log(10 == '10') // true
console.log(10 === '10') // false

const valor  = '0'

switch (valor) {
  case 0:
    console.log(`El valor es ${typeof valor}`)
    break;
  case '0':
    console.log(`El valor es ${typeof valor}`)
    break;
  case false:
    console.log(`El valor es ${typeof valor}`)
    break;
}