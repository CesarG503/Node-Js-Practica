
console.log("Hello World");

let user_name = "John Doe";
let age = 25;
let adult = true;
let points = 100;



const names_1 = ["John", "Jane", "Jack"];
let names_2 = ["John", "Jane", "Jack"];
var names_3 = ["John", "Jane", "Jack"];


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}


if (age >= 18) {
    console.log("Eres un adulto");
}


/* Declaracion de una fucnion  */

function add(a, b) {
    return a + b;
}
let result = add(5, 10);
console.log(result);

function sayHello(name) {
    return `Hola como estas  ${name} ?`;

}
console.log(sayHello("Cesar God"));