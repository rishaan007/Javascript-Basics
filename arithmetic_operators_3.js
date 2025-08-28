// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x * 5;

let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2; //stores quotient
//students = students ** 3; //exponent operator 
//let extraStudents = students % 3; //stores remainder

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;

/*
       operator precedence
       1. parenthesis ()
       2. exponents
       3. multiplication & division & modulo
       4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
let result2 = 12 % 5 + 8 / 2;
let result3 = 6 / 2 ** (2 + 5);


console.log(result);
console.log(result2);
console.log(result3);