// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

/*
let age = 19;

if(age >= 18) {
    console.log("You are an Adult!");
}
else {
    console.log("You are not an Adult!");
}
*/

// boolean
/*
let isStudent = false;

if(isStudent) {
    console.log("You are a student!");
}
else {
    console.log("You are NOT a student!");
}

*/

//nested if

/*
let age = 19;
let hasLicense = true;

if(age >= 18) {
    console.log("You are old enough to drive!");
    if(hasLicense) {
        console.log("You have your license!");
    }
    else {
        console.log("You do not have your license yet!");
    }
}
else {
    console.log("You must be 18+ to have a license!");
}
*/

//else if
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;
mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if(age >= 100) {
        resultElement.textContent = 'You are TOO OLD to enter this site!';
    }
    else if(age==0){
        resultElement.textContent = 'You cannot enter. You were just born.';
    }
     else if(age >= 18) {
        resultElement.textContent = 'You are old enough to drive!';
    }
    else if(age < 0) {
        resultElement.textContent = 'Your age cannot be below 0!';
    }
    else {
        resultElement.textContent = 'You must be 18+ to have a license!';
    }
}
