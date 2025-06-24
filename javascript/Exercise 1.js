const { normalize } = require("path");

const prompt = require("prompt-sync")();
//Question no. 1
/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = prompt("Enter a number: ");
b = Number.parseInt(b);
console.log(b);
console.log(typeof b);

a.push(b);

console.log(a);
*/

//Question no. 2
/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

do {
  b = prompt("Enter some value");
  b = Number.parseInt(b);
  a.push(b);
} while (b != 0);

console.log(a);
*/

//Question no. 2 practice
/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

do {
  b = prompt("please enter your input: ");
  b = Number.parseInt(b);
  a.push(b);
} while (b != 0);
console.log(a);
*/

//Question no. 2 practice

/*
let a = [100,
         200,
         300,
         400,
         500];

do {
  b = prompt("Enter your input: ");
  // b = Number.parseInt(b);
  a.push(b);
} while (b != 0);
console.log(a);
console.log(typeof a);
console.log(a.length);
*/

//Question 3
/*
let a = [10, 37, 40, 26, 50, 20, 55];

do {
  c = prompt("Please enter your input: ");
  c = Number.parseInt(c);
  a.push(c);
} while (c != 0);

let b = a.filter((x) => {
  return x % 10 == 0;
});

console.log(b);
*/

//Question no.3
/*
let r = [2, 3, 4, 5, 6, 7, 8];

let o = r.map((value) => {
  return value * value;
});

console.log(o);
*/

//Question no. 4
/*
let a = [10, 20, 30, 40];

let b = a.reduce((a1, a2) => {
  return a1 + a2;
});
console.log(b);
*/

let r = Math.floor(Math.random() * 100);
let attempt = 0;
let max_attempt = 100;



do {
  l = prompt("Guess the correct number");
  l = Number.parseInt(l);
  attempt++;
  
  
  if (l > r) {
    console.log("Greater than correct number");
  } 
  
  else if (l < r) {
    console.log("Lower than correct number");
  } 
  
  else {
    console.log(`Congo correct number is ${r} `);
    console.log(`attempts used ${attempt}`)
    console.log( "Your Score is", (100 - attempt) )
  break;
  }

  if( attempt === max_attempt ){
    console.log("You have used maximum attempts")
    console.log("Game over")
    
    break;
    
  }
  
}while( true );
