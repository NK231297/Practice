//Question No. 1
/*
let marks = {
"Aarav Sharma" : 57,
"Neha Verma" : 62,
"Rohan Iyer" : 59,
"Priya Patel" : 68,
"Vikram Rao" : 52
}

for( let i=0; i<Object.keys(marks).length; i++ ){
    console.log( "The marks of " + Object.keys(marks)[i] + " " + "are" + " " + "=" +" " + marks[Object.keys(marks)[i]] )
}
*/
//Question No. 2
/*
let marks = {
    "Aarav Sharma" : 57,
    "Neha Verma" : 62,
    "Rohan Iyer" : 59,
    "Priya Patel" : 68,
    "Vikram Rao" : 52
}

for( let i in marks ){
    console.log( "Marks of " + i + " are = " + marks[i])
}
*/

//Question No. 3
/*
let correct_number = 11;

let user_input;

while( user_input != correct_number ){
    user_input = prompt("Guess the correct number")
    if( user_input == correct_number ){
        console.log("You have entered correct number")
    }
    else{
        console.log("Wrong guess, try again.")
    }
}
*/
//Question No. 4
/*
const mean = (a, b, c, d) => {
    return (a+b+c+d)/4
}
*/
function mean (a, b, c, d){
    return (a+b+c+d)
}

console.log( mean(9.5, 6.5, 7.2, 7.6) )