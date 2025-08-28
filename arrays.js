// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana"];

fruits[3] = "coconut"; // adds coconut 
// fruits.push("coconut"); // adds to last element
// fruits.pop() // removes element from last
// fruits.unshift("mango"); // adds to first element
// fruits.shift(); // removes the last element

let numOfFruits = fruits.length;
let index = fruits.indexOf("banana");
let ind = fruits.indexOf("mango"); // returns -1 as not found

console.log(index);
console.log(ind);

console.log(numOfFruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits.sort(); 
fruits.sort().reverse(); // reverse alphabetical sort

for(let i = 0;i<fruits.length;i++){
    console.log(i);
}

//enhanced for loop
for(let fruit of fruits){
    console.log(fruit);
}