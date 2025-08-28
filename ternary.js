// ternary operator = a shortcut to find if{} and else {} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

// let age = 12;
// let message = age >= 18 ? "You are an Adult!" : "You are a minor!";
// console.log(message); //print statement 

// let time = 9;
// let greeting = time < 12 ? "Good Morning!" : "Good Afternoon";
// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "You are a Student!" : "You are NOT a student!";
// console.log(message);

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);

