let space = ' '
let firstName = "Nathan"
let lastName = "Desalegn"
let motherName = "Addis"
let middleName = "Habtamu"
let sisterName = "Eldana"
let age = 11
let bornIn = "Addis Abeba, Ethiopia"
let countryLive = "Venezia, Italy"
let job = "student"

let fullName = firstName + space + lastName
console.log(fullName) // "Nathan Desalegn" // Concatenation using + operator and space variable

console.log(firstName, space, middleName, lastName, motherName, sisterName, age, bornIn, countryLive, job) // this is so good and simple to use console.log to print multiple variables at once

let greeting = "Hi"
let name = 'Nathan'
let message = `${greeting} ${name}, how are you?`
console.log( message)
  firstName = "Nathan"
  lastName = "Desalegn"
   fullName = firstName + " " + lastName

console.log(fullName); // "Nathan Desalegn" // Concatenation using + operator // This is a simple way to concatenate strings in JavaScript.
let chat = "Hello";
chat += ", ";
chat += "world!";
console.log(chat); // "Hello, world!" // Concatenation using += operator
// i didn't know this opreator before, but it is very useful for concatenating strings in a more readable way.  

let n = "Nathan";
let years = 11;

let intro = `My name is ${n} and I am ${years} years old.`;
console.log(intro); // this code is so good 