// function = A section of reusable ocde.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

/*

function hbd(username, age) { // parameters
    console.log("Happy Birthday to you");
    console.log("Happy Birthday to you");
    console.log(`Happy Birthday dear ${username}`);
    console.log("Happy Birthday to you");
    console.log(`You are ${age} years old`);
}

hbd("Rishaan", 19);
hbd("Piku", 20);
hbd("Bhola", 21);

*/
 
function add(x, y){
    let result= x + y;
    return result;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function division(x, y){
    return x / y;
}
function isEven(number){

    if(number % 2 === 0) { // return number % 2 === 0? true: false;
        return true;
    }
    else{
        return false;
    }
}
function isValidEmail(email){
    return email.includes("@")? true : false;
}
console.log(add(2, 3));
console.log(subtract(5, 3));
console.log(multiply(2, 3));
console.log(division(2, 3));
console.log(isEven(9));
console.log(isValidEmail("rishaan@gmail.com"));