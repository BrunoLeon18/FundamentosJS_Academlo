/*** TIPOS DE DATOS ==> ARRAY ***/
const array = []
console.log(array);

const userNames = ['einar','reinaldo','johnatan']

// para acceder a los elementos de un arreglo

console.log(userNames[0]);
console.log(userNames[1]);
console.log(userNames[2]);
console.log(userNames[3]);

// propiedad length: los indices comienzan desde 0 hasta length -1
console.log(userNames.length);

//reemplazar un elemento del array
userNames[0] = 'steven'

console.log(userNames);

//agregar un nuevo elemento
userNames[3] = 'juan';
console.log(userNames);

// obtener el ultimo indice del array
console.log(userNames[userNames.length-1]);

// truncar un arreglo
userNames.length = 2;
console.log(userNames);

// limpiar un arreglo

userNames.length = 0;
console.log(userNames);

// pdemos almacenar cualquier tipo de dato en un arreglo
const vector =[
    {a: 1},
    'Hola',
    true,
    20,
    [1,2,3,],
    function getStrg(){
        return 'Hola1'
    }
]


console.log(vector[0]);
console.log(vector[1]);
console.log(vector[2]);
console.log(vector[3]);
console.log(vector[4]);
console.log(vector[5]());


// arreglo multidimensional

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);
console.log(matriz[0][2])
console.log(matriz[2][0]);

console.log(typeof matriz);

console.log(Array.isArray(matriz));