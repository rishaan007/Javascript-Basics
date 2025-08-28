// string slicing =  creating a substring
//                   from a portion of another string

//                   string.slice(start,end);

const fullName = "Rishaan Kumar";

// let firstName = fullName.slice(0,8);
// let lastName = fullName.slice(8,13); // let lastName = fullName.slice(8); <- SAME
let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1); // -1 = last character, -2 is 2nd last and so on....\

// finding first and last name without counting characters
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);

const email = "rishaan1@gmail.com";

let username = email.slice(0, email.indexOf("@"));

let extention = email.slice(email.indexOf("@" + 1)); // +1 succeeds to next character

console.log(username);
console.log(extention);