/*
const date = new Date;

let Timehour = date.getHours();
console.log(Timehour);

const Name = "Nikhil Kumar";

let hour = Timehour >= 6 && Timehour <= 12 ? 'Good Morning' :
           Timehour >= 13 && Timehour <= 17 ? 'Good Afternoon' : 'Good Night';

console.log(hour, Name);
*/
// const agebt = document.getElementById("age");
// let age;
// let day;
// let date = new Date();

// let day = date.getDay();


/*
agebt.addEventListener(`click`, function(e){

    e.preventDefault();

    age = prompt("Please enter your age.");

    age = parseInt(age);
    
    day = prompt("Enter day number");
    
    day = parseInt(day);
    
    let holiday = (day === 0 || day === 6);

    let result = (age > 6) || holiday ? "Not eligible for dicount." : "Eligible for discount";
    
    console.log(`You are ${result}`);
});

*/
/*
let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess = prompt("Please enter your guess!");


let result = randomNumber < 5 ? "Heads" : "Tails";

let guessResult = result === guess ? "You win!" : "You lose!";

console.log(result);
console.log(guessResult);
*/

const showCart = document.getElementById("show");
const AddToCart = document.getElementById("add");
const AddTwo = document.getElementById("add2");
const AddThree = document.getElementById("add3");
const Reset = document.getElementById("reset");

let Cart = 0;

showCart.addEventListener(`click`, function(e){
    e.preventDefault();

    console.log(Cart);
});

AddToCart.addEventListener(`click`, function(e){
    e.preventDefault();

    Cart++;

    console.log("1pc entered in Cart");
});

AddTwo.addEventListener(`click`, function(e){
    e.preventDefault();

    Cart += 2;

    console.log("2pc entered in Cart");
});

AddThree.addEventListener(`click`, function(e){
    e.preventDefault();

    Cart += 3;

    console.log("3pc entered in Cart");
});

Reset.addEventListener(`click`, function(e){
    e.preventDefault();
    Cart = 0;
    console.log("Cart is reset");
    console.log(Cart);
});