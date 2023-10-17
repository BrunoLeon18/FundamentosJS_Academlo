// Ejercicios con objetos

// 1. Pasa al objeto persona la propiedad correo del objeto datos, ten en cuenta
//  que el objeto persona no tiene la propiedad correo, tendrás que crearla.
const persona = {
  nombre: "Juan",
  edad: 20,
};

const datos = {
  correo: "juan@correo.com",
};

console.log(Object.assign(persona, datos))
console.log(persona);

// 2. Crea una función que reciba un matriz de arreglos y regrese un objeto con los valores de la matriz, 
// el primer valor del arreglo será la llave y el segundo el valor
const matriz = [
  ["nombre", "Juan"],
  ["edad", 20],
  ["correo", "juan@correo.com"],
];

function crearObjeto(arr) {
 return Object.fromEntries(arr);
}

console.log(crearObjeto( matriz));

// 3. Crea una función que reciba un arreglo de objetos alumnos y otro de objetos calificaciones, 
// la función debe combinar los objetos de los arreglos y regresar un arreglo de objetos 
// con la siguiente estructura: [{ id: 1, nombre: "Juan", calificacion: 9}, { id: 2, nombre: "Pedro", calificacion: 7 }, { id: 3, nombre: "Maria", calificacion: 8 }]
const alumnos = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "Maria" },
];

const calificaciones = [
  { alumno_id: 2, calificacion: 7 },
  { alumno_id: 3, calificacion: 8 },
  { alumno_id: 1, calificacion: 9 },
];
function combinarObjetos(alumnos, calificaciones) {
  return 
}

console.log(alumnos[0]);
console.log(calificaciones[0].calificacion);
// 4. Crea una función que reciba un arreglo de objetos y regrese un nuevo arreglo con los nombres y edades de cada objeto ejemplo: [{nombre: 'Juan', edad: 20},...] => [['Juan', 20],...]
const personas = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Pedro", edad: 21 },
  { nombre: "Maria", edad: 22 },
];

function newArr(arr) {
  const array = []
  for (let i = 0; i < arr.length; i++) {
    array.push(Object.values(arr[i]));
    
  }
  return array
}

console.log(newArr(personas));

// 5. Dado el siguiente objeto, deberás crear una función que retorne el valor más alto, OJO sólo el número, no la key.
const obj = {value1: 2, value2: 6, value3: 4 }

function obtenerValorMasAlto(obj) {
  const value = Object.values(obj);
  return value.sort((a,b) => b - a)[0];
}

console.log(obtenerValorMasAlto(obj));