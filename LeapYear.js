var chalk = require('chalk');
var readlinesync = require('readline-sync');


function isValidYear(year) {
  let numOfDigits = 0;
  while(year != 0){
    // console.log(year);
    year = Math.floor((year/10));
    numOfDigits++;
  }
  if(numOfDigits == 4){
    return true;
  }
  else{
    return false;
  }
}

// isValidYear(4123);

function isLeapYear(year) {
  if( (year%4 == 0 && year%100 != 0) || year%400 == 0){
    return true;
  }
  else{
    return false;
  }
}

// isLeapYear(2013)

var inputYear = readlinesync.question(chalk.bgBlue("Enter your Year of birth: "));

if(!isValidYear(inputYear)){
  console.log(chalk.red.underline.bold("Invalid Year"));
}
else{
  if(isLeapYear(inputYear)){
    console.log(chalk.blue.underline.bold("You were born in leap year!!"));
  }
  else{
    console.log(chalk.red.underline.bold("You were not born on leap year!!"));
  }
}