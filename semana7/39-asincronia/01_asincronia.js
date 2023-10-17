/***************************************/
/* ASYNC ==> Asincronía en JavaScript */
/**************************************/

/* Ejemplo sincrono */
console.log('Tarea #1')
let texto;
for (let i = 0; i < 5000000000; i++) {
  texto = 'Tarea #2'
  
}
console.log(texto)
console.log('Tarea #3')

/* Ejemplo de asincronia */
console.log('Tarea #4')
window.setTimeout(() => {
  console.log('Tarea #5')
}, 1000)
console.log('Tarea #6')