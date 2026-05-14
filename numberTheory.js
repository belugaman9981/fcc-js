const readline = require('readline');

numList = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function askNumber(i, numbers) {
  if (i >= numbers) {
    console.log("The List of Numbers You Entered is: " + numList);
    rl.close();
    return;
  }

  rl.question("Enter a Number: ", function(num) {
    numList.push(num);
    askNumber(i + 1, numbers);
  });
}

rl.question("Enter a How Many Numbers you Want: ", function(numbers) {
  numbers = parseInt(numbers);
  askNumber(0, numbers);
});