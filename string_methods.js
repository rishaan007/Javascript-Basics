// string methods = allow you to manipulate and work with text (strings)

let userName = "   Rishaan   ";

console.log(userName.charAt(0));

console.log(userName.indexOf("a"));

console.log(userName.lastIndexOf("a"));

console.log(userName.length);

console.log(userName.trim());

console.log(userName.toUpperCase());

console.log(userName.toLowerCase());

console.log(userName.repeat(5)); // no. of times you want to repeat

console.log(userName.startsWith("A")); //checks if it starts with mentioned or not

if(userName.startsWith("A")) {
    console.log("Your username can't begin with 'A'");
}
else{
    console.log(userName + "does not starts with 'A'!");
}

if(userName.includes(" ")) { // whitespace
    console.log("Your username can't include ' '");
}
else{
    console.log(userName + "does not starts with ' '!");
}

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart("15","A"); //15 is the size, A is the empty spaces filled to match the size
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd("20","B"); //15 is the size, A is the empty spaces filled to match the size
console.log(phoneNumber);

