// 1. COMMENTS (0:04:23)
// This is a single-line comment

/* This is a
   multi-line comment */


// 2. DECLARE VARIABLES (0:05:56)
var a;
var b = 2;


// 3. ASSIGNMENT OPERATOR (0:06:15)
a = 7;
b = a;
console.log(b); // 7


// 4. INITIALIZING VARIABLES (0:11:31)
var c = 9;


// 5. UNINITIALIZED VARIABLES (0:11:58)
var x;
console.log(x); // undefined


// 6. CASE SENSITIVITY (0:12:40)
var myVar = 5;
var myvar = 10; // completely different variable
var MYVAR = 15; // also different


// 7. ADD TWO NUMBERS (0:14:05)
var sum = 5 + 10;
console.log(sum); // 15


// 8. SUBTRACT (0:14:34)
var difference = 12 - 6;
console.log(difference); // 6


// 9. MULTIPLY (0:14:52)
var product = 4 * 5;
console.log(product); // 20


// 10. DIVIDE (0:15:12)
var quotient = 10 / 2;
console.log(quotient); // 5


// 11. INCREMENT (0:15:30)
var i = 3;
i++;
console.log(i); // 4


// 12. DECREMENT (0:15:58)
var j = 5;
j--;
console.log(j); // 4


// 13. DECIMAL NUMBERS / FLOATS (0:16:22)
var myDecimal = 5.7;


// 14. MULTIPLY DECIMALS (0:16:48)
var decProduct = 2.0 * 2.5;
console.log(decProduct); // 5


// 15. DIVIDE DECIMALS (0:17:18)
var decQuotient = 4.4 / 2.0;
console.log(decQuotient); // 2.2


// 16. REMAINDER / MODULO (0:17:33)
var remainder = 11 % 3;
console.log(remainder); // 2


// 17. COMPOUND ASSIGNMENT - ADDITION (0:18:22)
var num = 10;
num += 5;
console.log(num); // 15


// 18. COMPOUND ASSIGNMENT - SUBTRACTION (0:19:22)
num -= 3;
console.log(num); // 12


// 19. COMPOUND ASSIGNMENT - MULTIPLICATION (0:20:18)
num *= 2;
console.log(num); // 24


// 20. COMPOUND ASSIGNMENT - DIVISION (0:20:51)
num /= 4;
console.log(num); // 6


// 21. DECLARE STRING VARIABLES (0:21:19)
var firstName = "Matt";
var lastName  = "Smith";


// 22. ESCAPING QUOTES (0:22:01)
var myStr = "He said \"hello\" to me";
console.log(myStr); // He said "hello" to me


// 23. SINGLE QUOTES (0:23:44)
var myStr2 = 'He said "hello" to me'; // no escaping needed
console.log(myStr2);


// 24. ESCAPE SEQUENCES (0:25:18)
var escapeStr = "Line one\nLine two\tTabbed";
console.log(escapeStr);
/*
  \n  = new line
  \t  = tab
  \\  = backslash
  \"  = double quote
  \'  = single quote
*/


// 25. CONCATENATION WITH + (0:26:46)
var greeting = "Hello" + " " + "World";
console.log(greeting); // Hello World


// 26. CONCATENATION WITH += (0:27:49)
var myStr3 = "Hello ";
myStr3 += "World";
console.log(myStr3); // Hello World


// 27. CONSTRUCTING STRINGS WITH VARIABLES (0:29:01)
var name = "Matt";
var fullGreeting = "Hello, " + name + "and I am well!";

console.log(fullGreeting); // Hello, Matt!

// 28. Appending Variables to Strings (0:30:14)

var anAdjective = "awesome!"
var ourStr = "school is not "
ourStr += anAdjective;

var someAdjective; // this is different then the one on line 152
var myStr = "Learning to code is ";

