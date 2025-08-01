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

let city = "New York";
let weather = "sunny";

console.log("The weather in " + city + " is " + weather + ".");
// Concatenation using + operator
// Output: The weather in New York is sunny.
console.log(`The weather in ${city} is ${weather}.`);
// another way to do
// Output: The weather in New York is sunny.
// how to connect with bactick like this ``.

let str1 = "Hello"; // Hello
let str2 = "World"; // World

let result = str1.concat(" ", str2);
console.log(result); // "Hello World"

let full = "Good".concat(" ", "morning", "!", " 😊");
console.log(full); // "Good morning! 😊"

let words = ["JavaScript", "is", "awesome"];
let sentence = words.join(" ");
console.log(sentence); // "JavaScript is awesome"

let csv = ["one", "two", "three"].join(",");
console.log(csv); // "one,two,three"

let a = 100;
let b = 200;

let combined = a.toString() + b.toString();
console.log(combined); // "100200"