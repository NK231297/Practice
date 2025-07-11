
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

let yourScore = 0;
let computerScore = 0;
let Draw = 0;

function abc(){
    computerChoice = Math.floor(Math.random() * 3) + 1
    
    computerChoice === 1 ? console.log(`Comp. Move: Rock`) : 
    computerChoice === 2 ? console.log(`Comp. Move: Paper`) : console.log(`Comp. Move: Scissor`);

    let userChoice = choiceNumber;

    let computerMove = computerChoice;

    let decision =  userChoice === 1 && computerMove === 2 ? "Computer Win" :
                    userChoice === 1 && computerMove === 3 ? "You Win" :
                    userChoice === 2 && computerMove === 1 ? "You Win" :
                    userChoice === 2 && computerMove === 3 ? "Computer Win" :
                    userChoice === 3 && computerMove === 2 ? "You Win" :
                    userChoice === 3 && computerMove === 1 ? "Computer Win" : "Draw";

    console.log(decision);

    return 5;
};


let choiceNumber = 0;

let computerChoice = "";

rock.addEventListener(`click`, function(e){
    e.preventDefault();

    choiceNumber === 0 ? choiceNumber++ : console.log("");

    console.log("User Move: Rock");

    console.log(abc());
})

paper.addEventListener(`click`, function(e){
    e.preventDefault();
    choiceNumber === 0 ? choiceNumber += 2 : console.log("");
    
    console.log("User Move: Paper");

    console.log(abc());
})

scissor.addEventListener(`click`, function(e){
    e.preventDefault();
    choiceNumber === 0 ? choiceNumber += 3 : console.log("");

    console.log("User Move: Scissor");

    console.log(abc());
})


/*
function calculateTax (cost, tax){
    console.log(cost * tax);
};

calculateTax(1000, 0.18);

function discPercent(cost, nettRate){
    return ((cost - nettRate) / cost) * 100 + "%";
};

discPercent(1000, 850);
*/