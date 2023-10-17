/*** TIPOS DE DATOS ==> Object ***/

const user ={
    name: 'David',
    lastName: 'tello',
    age: 25,
    'is student': true,
    salute: function(nombre){
        return `Hi ${nombre}`
    }
}


// acceder a una propiedad con notacion de punto

console.log(user.name);
console.log(user.lastName);
console.log(user.age);

// acceder a una propiedad con notacion de corchete
console.log(user['is student']);
console.log(user['name']);
console.log(user['lastName']);

function getValue(obj, key) {
    return obj[key];
}

console.log(getValue(user, 'name'));

// acceder al metodo 

console.log(user.salute( ' raul'));

// agregar una nueva propiedad a mi objeto

user.email = 'david@gmail.com';

console.log(user);


// agregar un metodo a mi objeto

user.showAge = function(){
    return user.age;
}

console.log(user);
console.log(user.showAge());

// midificar propiedad de mi objeto

user.age = 30;

console.log(user);
console.log(user.age);

// remover propiedades de un objeto

delete user.age;

console.log(user);

// remover un metodo de un objeto

delete user['is student'];

console.log(user);

// como compruebo que una propiedad existe dentro de un objeto

console.log('name' in user);
console.log('adress' in user);

// los objetos son unico y no se pueden repetir

const obj = {
    a:1
}

const obj2 = {
    a: 1
}

console.log(obj === obj2);

const obj3 = obj2;

console.log(obj3 === obj2);


