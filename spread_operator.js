// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into separate elements
//                   (unpack the elements)

// using arrays
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); // unpack the array
let minimum = Math.min(...numbers);

console.log(minimum);
console.log(maximum);

// using string
let username = "Rishaan";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]; // copy of fruits and vegetables is stored

console.log(foods);
