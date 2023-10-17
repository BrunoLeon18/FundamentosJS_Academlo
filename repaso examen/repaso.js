//1****************************************************
const phrase = "hola me llamo ale";

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString(phrase));


//2****************************************************

const array1 = [8, 9, 10, 16];
const array2 = [59, 60, 70, 10];
const array3 = [10, 20];

function sumThreeArrays(array, array2, array3) {
  const result = array.concat(array2, array3);
  console.log(result)
  let sum = 0;
  
  for (const element of result) {
    sum += element;
    console.log(sum)
  }
  return sum;
  
}


console.log(sumThreeArrays(array1, array2, array3));

//3******************************************************

function multiplesLimited(number, maxMultiples) {
  const result = [];
  
  for (let i = number + 1; result.length < maxMultiples; i++) {
    if (i % number === 0) {
      console.log(result)
      result.push(i)
    }
  }
  return result;
}

console.log(multiplesLimited(30, 6));

//4 crea una funcion que encuentre la palabra que mas se repita en la frase dada y la devuelva, ojo no la cantidad de veces que se repita, si no la palabra misma

const phrase1 =
  "soy programador, soy estudiante de academlo, soy disciplinado, soy puntual, soy quien va aprobar el examen de manana";

function mostCommondWords(string) {
    const result = string.split(" ");
    const toObject = {}
    console.log(result)
    for (const item of result) {
        if (toObject[item]) {
            toObject[item]++
            
        }else{
            toObject[item] = 1
        }
    }
    const commonWord = Object.entries(toObject).sort((a,b) => b[1] - a[1])
    console.log(commonWord)
    return commonWord[0][0]
}

console.log(mostCommondWords(phrase1))

const array = [20, 100]
const array8 = [30, 10]

function sumaArray(array, array1) {
  const result = array.concat(array1)
  let sum = 0
  console.log(result)
  for (const item of result) {
    sum += item
    console.log(sum)
  }
return sum
}

console.log(sumaArray(array,array8))

function getNMultiples(number, totalMultiples) {
  // escribe tu solución aquí
  const result = []
  for (let i = number + 1; result.length < totalMultiples; i++) {
    if (i % number === 0) {
      result.push(i)
    }
  }
  return result
}

console.log(getNMultiples(30,5))

const letter = 'Hola me gusta la programacion'

function findMostCommonLetter(text) {
  // escribe tu solución aquí
  const obj = {}
  for (const item of text) {
    if (obj[item]) {
      obj[item]++
      
    }else{
      obj[item] = 1
    
    }
  }
 const letter = Object.entries(obj).sort((a,b) => b[1] - a[1])
 return letter[0][0]
}

console.log(findMostCommonLetter(letter))