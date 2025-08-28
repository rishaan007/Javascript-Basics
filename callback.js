// callback = a function that is passed as an argument 
//            to another function.
//            used to handle asynchronous operations: 
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

//            "Hey, when you're done, call this next."


/* 

hello(goodbye);
wait();
leave();

function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}

*/

// sum of two variables using callback

sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}