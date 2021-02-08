function newFunction(name, age, country) {
    var name = name || "oscar";
    var age = age || 32;
    var country = country || "MX";
    console.log(name, age, country);
}

// es6

function newFunction2(name = "oscar", age = 32, country = "MX") {
    console.log(name, age, country);
};
newFunction2();
newFunction2("Ricardo", "23", "CO");


let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


// Clase 3
let lorem = "primer frase epica linea 1\n"
    + "primer grase epica linea 2"

let lorem2 = ` segunda frase epica linea 1
ahora segunda frase epica linea 2`;
console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);
let { name, age, country } = person;
console.log(name, age, country);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['valeria', 'Yesica', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);

{
    var globalVar = "Global var";
}
{
    let globalLet = 'Global Let';
}
console.log(globalVar);
console.log(globalLet);
// let no esta disponible en el global 
// scope, en cambio si en su bloque como se 
// mostrara a continuacion
{
    var globalVar = "Global var";
}
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);

const a = 'b';
a = 'a';
// en este otro caso no se puede asignar un nuevo valor en una constante, en constentes nuenca cambien
var a = 'b';
a = 'a';
console.log(a);
// en var si es permitido cambiar el valor

// clase 4
let name='Oscar';
let age=32;
let country='MX'
// es5
obj ={name: name, age:age, country: country};
// es6
obj2 ={name, age, country};
console.log(obj2);

const names =[
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age: 27},
]
let listOfNames = names.map(function(item){
    console.log(item.name);
})
let listOfNames2= names.map(item=> console.log(item.name));
const listOfNames3= (name, age, country) => {
    ...
}
const listOfNames4 = name => {
    ...
}
const square=num => num * num;

// promesas
const helloPromise=() => {
    return new Promise((resolve, reject)=>{
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

// Clase 5
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));

import {hello} from './module';
hello();

function* helloWorld(){
    if(true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World;'
    }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
