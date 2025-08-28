// for loop = repeat some code a LIMITED amout of times
/*

for(let i = 10;i > 0;i--){
   // console.log("Hello"); 
    console.log(i);
}

console.log("HAPPY NEW YEAR!");

*/
for(let i=0;i<20;i++){
    if(i == 13) {
        continue; // 13 is skipped, if break is used then it prints till 12 as break is in 13
    }
    else{
        console.log(i);
    }
}
