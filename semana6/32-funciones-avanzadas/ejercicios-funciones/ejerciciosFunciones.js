/******************************/
/* Ejercicios con Funciones: */
/*****************************/
/*
Ejercicio 1:
1. Si las funciones son tratadas como cualquier otra variable en JavaScript, ¿cómo se les conoce a las funciones?
Respuesta: Funciones de primera clase
    
2. Las funciones que llaman a otras funciones o que devuelven funciones ¿Son llamadas?.
Respuesta: funciones de orden superior

3. ¿cómo se le llama a una función que pasamos como argumento a otra función?
Respuesta: funcion callback

4. ¿cómo se le conoce a una función que se llama así misma para realizar algún tipo de tarea?
Respuesta: funcion recursiva
*/

/*
Ejercicio 2:
1. Declarar una función que muestre por consola un "hola mundo"
2. Asignalo a una nueva variable
3. Llama a la función con el nombre de la variable. (No olvides ponerle paréntesis)
*/

function hello() {
    console.log('Hola Mundo')
}

const saludar = hello;
saludar()


/*
Ejercicio 3:
1. Crea una variable usando let sin asignarle ningún valor.
2. Crea una constante que almacene el resultado de una condición, puedes usar true o false.
3. Crea una sentencia if/else que asigne una función a la variable dependiendo de la condición.
4. Si la condición es true la función deberá retornar un mensaje: 'La condición es verdadera'
5. Si la condición es false la función deberá retornar un mensaje: 'La condición es falsa'
6. Llamar a la función. (No olvides el paréntesis)
*/
let variable;

const result = true;

if (result) { variable = function() {
    return 'La condición es verdadera';}
}else{ variable = function() {
    return 'La condición es falsa';
    }
}
console.log(variable())
/*
Ejercicio 4:
Pasa las siguientes funciones delcaradas a funciones expresadas de flecha.
*/

// function sumar(a, b) {
//     return a + b;
// }

// function permiso(edad) {
//     if (edad >= 18) {
//         return "Puedes pasar";
//     } else {
//         return "No puedes pasar";
//     }
// }

const sumarExp = (a, b) => a + b;

const permisoExp =(edad) => (edad >= 18) ? "Puedes pasar": "No puedes pasar";

console.log(sumarExp(1, 2));
console.log(permisoExp(18));
console.log(permisoExp(15));
