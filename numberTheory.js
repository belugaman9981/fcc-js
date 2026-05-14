const readline = require('readline');

numList = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter a How Many Numbers you Want: ", function(numbers) {
  
  for (let i = 0; i < numbers; i++) {

    rl.question("Enter a Number: ", function(num) {
      numList.push(num);
    })
  }
  
  console.log("The List of Numbers You Entered is: " + numList);
  
  rl.close();

});
