var chalk = require('chalk');
var readlinesync = require('readline-sync');

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

// console.log(isPrime(13))

var userInput = readlinesync.question(chalk.bgBlue("Enter the number: "));

console.log();

if(isPrime(userInput)){
    console.log(chalk.blue(userInput+" is a prime number"));
}
else{
    console.log(chalk.red(userInput+" is not a prime number"));
}