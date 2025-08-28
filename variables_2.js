// variable = A container that stores a value. 
//            Behaves as if it were the value it contains.

// 1.declaration let x;
// 2.assignment  x = 100;

let x = 100;
let age = 19; //numbers
let gpa = 2.1;
let price = 10.99;

console.log(typeof age);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);
console.log(x);

let firstName = "Bro";
let favoriteFood = "pizza"; // strings
let email = "rishaan007@gmail.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);

let online = true;
let forSale = false; //boolean
let isStudent = true;

console.log(`Bro is online: ${online}`);
console.log(`is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

let fullName = "Rishaan Kumar";
let student = true;

document.getElementById("p1").textContent =  `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
