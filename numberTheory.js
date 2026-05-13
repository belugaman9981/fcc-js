const readline = require();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter a number: ", function(number) {
  
  if (number % 2 == 0) {
    console.log("Your Number is even.");

  } else {
    console.log("The number is odd.")
  
  }
  
  rl.close();
});

