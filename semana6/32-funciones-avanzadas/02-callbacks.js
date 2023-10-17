/************************************/
/* FUNCTION ==> Funciones Callback */
/***********************************/

/* Callback Llamar después*/
/* Una función que pasamos como argumento a otra función **/

function pregunta(respuestaUser, pikachu, pokemon) {
  if (respuestaUser) {
    pikachu()
  } else {
    pokemon()
  }
}

/* Reapuesta */
const respuesta = false;

/* Función true*/
function acepto() {
  console.log('Acepto')
}
/* Función false*/
function rechazo() {
  console.log('Rechazo')
}

pregunta(respuesta, acepto, rechazo)