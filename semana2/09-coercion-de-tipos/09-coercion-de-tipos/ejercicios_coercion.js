// 1. Realice una coerción implícita

// 2. Realice una coerción explícita

// 3. Sin modificar el código, qué valor se imprime en la consola?
/*** RECUERDA, NO USES QUOKKA, RÉTATE, APRENDERÁS MÁS Y DOMINARÁS EL TEMA ***/
console.log(2 + '2') //
console.log(1 + 1 + '2') //
console.log(+[] + 5) // 5
console.log('2' + 1 + 1) //
console.log(true + true) //
console.log(true / null) //
console.log([] + 5) // 
console.log(+'n' + 'c' + 'y') //
console.log('20' - true) //
console.log(true + '20') //
console.log(25 + undefined) //
console.log(null + true) // 
console.log('b' + 'a' + +'a' + 'a') //
console.log(1 / []) //
console.log('{}' + 5) // 
console.log('5' - '2') //

console.log(Number([])) //
console.log(Boolean([false, false, false])) //
console.log(String(false)) //
console.log(String(Number(Boolean({})))) //

console.log(true + +'5') //
console.log(+null) //
console.log(+undefined) //
console.log(+NaN) //