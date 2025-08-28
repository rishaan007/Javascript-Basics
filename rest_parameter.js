// rest parameter = (...rest) allow a function work with a variable
//                  number of arguments by bundling them into an array

//                  spread = expands an array into separate elements
//                  rest = bundles seperate elements into an array

function openFridge(...foods){
    console.log(foods); // this will display rest parameter
    // i.e. separate elements into an array
    // console.log(...foods) -> if this is printed then spread is formed
    // i.e. into separate elements
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5); // Type 1

const foods = getFood(food1, food2, food3, food4, food5); // Type 2

console.log(foods); // Type 2

// sum

function sum(...numbers){
    
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 3, 45, 7427);

console.log(`Your total is $${total}`);

// average 

function getAverage(...numbers){
    
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const avg = getAverage(1, 3, 45, 7427);

console.log(`Your average is $${avg}`);

// combine string

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Rishaan", "Kumar", "-", "The", "Great");

console.log(fullName);