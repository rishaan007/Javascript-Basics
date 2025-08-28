// SWITCH = can be efficient replacement to many else if statements

/* 
let day = 7; // for default: let day = "pizza";

switch(day) {
    case 1:
        console.log("It is Monday!");
        break; // if break is not used then if condition matches then it will print everything after it
    case 2:
        console.log("It is Tuesday!");
        break;
    case 3:
        console.log("It is Wednesday!");
        break;
    case 4:
        console.log("It is Thrusday!");
        break;
    case 5:
        console.log("It is Friday!");
        break;
    case 6:
        console.log("It is Saturday!");
        break;
    case 7:
        console.log("It is Sunday!");
        break;
    default:
        console.log(`${day} is not a day`);
}
*/

let testScore = 99;
let letterGrade;

switch(true) {
    case testScore >= 90:
        letterGrade ='A';
        break;
    case testScore >= 80:
        letterGrade ='B';
        break;
    case testScore >= 70:
        letterGrade ='C';
        break;
    case testScore >= 60:
        letterGrade ='D';
        break;
    default:
        letterGrade = 'F';
}

console.log(letterGrade);