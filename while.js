// while loop = repeat some code WHILE some condition is true

/*

let username = "";

while(username === "" || username === null) {
    username = window.prompt(`Enter your name`);
}

console.log(`Hello ${username}`);

// do while loop

let username;

do{
    username = window.prompt(`Enter your name`); // Runs atleast once
} while(username === "" || username === null)

console.log(`Hello ${username}`);

// login prompt using while loop

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "Rishaan" && password === "R@123"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}

*/

// login prompt using do while 

let loggedIn = true;
let username;
let password;

do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "Rishaan" && password === "R@123"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
} while(!loggedIn)