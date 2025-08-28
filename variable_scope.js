// variable scope = where a variable is recognized
//                  and accessible (local vs global)

let x = 3; // global variable

function function1() {
    let x = 1; // local variable prints first
    console.log(x);
}

function function2() {
    let x = 2;
    console.log(x);
}

function1();
function2();