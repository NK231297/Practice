const { normalize } = require("path");

const prompt = require("prompt-sync")();


//start

let My_score = 0;

let Comp_score = 0;

let Draws = 0;





for( i = 0; i<10; i++ ){
let us_un = prompt(" Enter your attack: ");

let us_in = us_un.toUpperCase();



let a = [ "S", "W", "G" ];

let b = Math.floor(Math.random() * a.length  );

let c = a[b];


console.log(` Tried: ${i+1} `)
if( us_un != "s" && us_un != "w" && us_un != "g" ){
    console.log(" please enter valid input ");
    
    continue;
}
console.log(` Your input is ${us_in} `)
console.log(` And my input is ${c} `);

if( us_in === "G" && c === "W" ){
    console.log(" Computer wins ")
    console.log(" Because gun will sink in water! ")
    Comp_score += 10;
}

if( us_in === "W" && c === "G" ){
    console.log(" You win ")
    console.log(" Because gun will sink in water! ")
    My_score += 10;
}

if( us_in === "S" && c === "G" ){
    console.log(" Computer wins ")
    console.log(" Because gun will shoot and kill the snake! ")
    Comp_score += 10;
}

if( us_in === "G" && c === "S" ){
    console.log(" You win ")
    console.log(" Because gun will shoot and kill the snake! ")
    My_score += 10;
}

if( us_in === "W" && c === "S" ){
    console.log(" Computer wins ")
    console.log(" Because snake will drink the water! ")
    Comp_score += 10;
}

if( us_in === "S" && c === "W" ){
    console.log(" You win ")
    console.log(" Because snake will drink the water! ")
    My_score += 10;
}

if( us_in === c ){
    console.log("Game Draw !")
    console.log("Because we both played same move !")
    Draws ++;
}


}

console.log(` Your score is     : ${My_score} `)
console.log(` Computer's score  : ${Comp_score} `)
console.log(` Draw matches      : ${Draws} `)




















/*

*/