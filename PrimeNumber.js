var chalk = require('chalk');
var readlinesync = require('readline-sync');


console.log("\nWhat is Prime number???\n");

console.log("A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.\n")

function isPrime(n){
    if(n == 1){
        return false;
    }

    for(var i = 2; i*i < n; i++){

        if(n%i == 0){
            return false;
        }

    }

    return true;
}


function isValidNumber(n){
    if(typeof n === 'number'){
        return true;
    }
    return false;
}

// console.log(isPrime("13") && isValidNumber("13"));

var n = 13;

// console.log(typeof n === 'number')

var userInput = readlinesync.question(chalk.bgBlue("Enter the number: "));

// console.log(typeof userInput);
console.log();

userInput = parseInt(userInput);

var msg = "";

if(isPrime(userInput)){
    msg = userInput+" is a prime number";
}
else{
    msg = userInput+" is not a prime number";
}

if(msg === "NaN is a prime number"){
    console.log("Enter valid number!!");
}
else{
    console.log(msg);
}