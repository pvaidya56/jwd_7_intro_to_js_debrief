//1. GenBuzz
// Create variable myNumber

// Check that the value of the myNumber is of type number

// If myNumber is not a number, print 'This is not a number' to the console.
// If value of myNumber is a multiple of 3 print 'Gen' to the console
// If value of myNumber is a multiple of 5 print 'Buzz' to the console
// If the value of myNumber is a multiple of both 3 and 5 (ex. 15) print GenBuzz to the console
// If the value of myNumber is any other number print the value of myNumber to the console.
// Reference Codecademy lessons: Introduction- Arithmetic Opertaors, Conditional Statements lessons 3, 4, 5,and 9

//Write your code for GenBuzz below this line:
// const myNumber = 9;
// if (typeof myNumber !== "number") {
//   console.log("This is not a number");
// } else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
//   console.log("GenBuzz");
// } else if (myNumber % 5 === 0) {
//   console.log("Buzz");
// } else if (myNumber % 3 === 0) {
//   console.log("Gen");
// } else {
//   console.log(myNumber);
// }

function guessNumber(myNumber) {
  if (typeof myNumber !== "number") {
    console.log("This is not a number");
  } else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log("GenBuzz");
  } else if (myNumber % 5 === 0) {
    console.log("Buzz");
  } else if (myNumber % 3 === 0) {
    console.log("Gen");
  } else {
    console.log(myNumber);
  }
}

console.log(guessNumber(40));
console.log(guessNumber(18));
console.log(guessNumber(15));

//2. E-COMMERCE ITEM LIST

// Use a swtich statement to print the price of the each item in the store to the console.
// Ex. If the value of the variable is 'shoes' then, the statement "Shoes are $50" should be printed to the console.
// Reference: Codecademy lesson 10
// Items:
// Shoes- $50
// Jeans- $25
// Hat- $12
// Socks- $2
// If the variable input is not an item in the store, then print 'Invalid Item' to the console.

//Write your code for the E-Commerce item list below this line:
// let price = '$50';
// switch (price) {
//   case "$50":
//     console.log("Shoes are $50");
//     break;
//   case "$25":
//     console.log("Jeans are $25");
//     break;
//   case "$12":
//     console.log("Hat are $12");
//     break;
//   case "$2":
//     console.log("Socks are $2");
//     break;
//   default:
//     console.log("Invalid Item");
//     break;
// }

function myPrice(price) {
  switch (price) {
    case "$50":
      console.log("Shoes are $50");
      break;
    case "$25":
      console.log("Jeans are $25");
      break;
    case "$12":
      console.log("Hat are $12");
      break;
    case "$2":
      console.log("Socks are $2");
      break;
    default:
      console.log("Invalid Item");
      break;
  }
}

console.log(myPrice("$45"));
console.log(myPrice("$25"));

//3. Print a random integer (whole number) between 50(inclusive) and 100(exclusive) to the console
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:
function getRandom(y) {
  if (y > 50 && y < 100) {
    return Math.floor(Math.random() * y);
  } else {
    return "Invalid number";
  }
}

console.log(getRandom(55));
console.log(getRandom(80));
console.log(getRandom(101));
