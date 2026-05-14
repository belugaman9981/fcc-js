const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter a number: ", function(number) {
  
  if (number % 2 == 0) {
    console.log("Your Number is Even.");

  } else {
    console.log("The Number is Odd.")
  
  }
  
  rl.close();
});

