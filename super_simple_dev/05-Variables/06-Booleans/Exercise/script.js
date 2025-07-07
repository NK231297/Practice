/*
const date = new Date;

let Timehour = date.getHours();
console.log(Timehour);

const Name = "Nikhil Kumar";

let hour = Timehour >= 6 && Timehour <= 12 ? 'Good Morning' :
           Timehour >= 13 && Timehour <= 17 ? 'Good Afternoon' : 'Good Night';

console.log(hour, Name);
*/
const agebt = document.getElementById("age");
// let age;
// let day;
// let date = new Date();

// let day = date.getDay();



agebt.addEventListener(`click`, function(e){

    e.preventDefault();

    age = prompt("Please enter your age.");

    age = parseInt(age);

    //here 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday

    
    day = prompt("Enter day number");
    
    day = parseInt(day);
    
    let holiday = (day === 0 || day === 6);

    let result = (age > 6) || holiday ? "Not eligible for dicount." : "Eligible for discount";
    
    console.log(`You are ${result}`);
});

