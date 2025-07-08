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

const remove2 = document.getElementById("remove2");
const remove3 = document.getElementById("remove3");

const Reset = document.getElementById("reset");

let Cart = 0;

showCart.addEventListener(`click`, function(e){
    e.preventDefault();

    console.log(Cart);
});

AddToCart.addEventListener(`click`, function(e){
        e.preventDefault();
        Cart < 10 ? ( Cart++, console.log("1pc entered") ) : console.log("Cart is full")
});
    
AddTwo.addEventListener(`click`, function(e){
        e.preventDefault();
    
        let spaceLeft = 10 - Cart;

        let add = Math.min(2, spaceLeft);

        Cart < 10 ? (Cart += add, console.log(`Added ${add}pc`)) : console.log("Full");
        
});
    
AddThree.addEventListener(`click`, function(e){
        e.preventDefault();
        
        let spaceLeft = 10 - Cart;

        let add = Math.min(3, spaceLeft);
        
        Cart < 10 ? (Cart += add, console.log(`Added ${add}pc`)) : console.log("Full")

        console.log(Cart);

});

remove2.addEventListener(`click`, function(e){
    e.preventDefault();
    // let remainingItem = 10 - Cart;
    
    let remove = Math.min(2, Cart);

    Cart > 0 ? (Cart -= remove, console.log(`removed ${remove}pc`)) : console.log("Cart is Empty")
    
    console.log(Cart);
})

remove3.addEventListener(`click`, function(e){
    e.preventDefault();

    let remove = Math.min(3, Cart);

    Cart > 0 ? (Cart -= remove, console.log(`removed ${remove}pc`)) : console.log("Cart Empty.");

    console.log(Cart);

})



Reset.addEventListener(`click`, function(e){
    e.preventDefault();
    Cart = 0;
    console.log("Cart is reset");
    console.log(Cart);
});
