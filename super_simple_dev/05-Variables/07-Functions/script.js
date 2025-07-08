const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

let yourScore = 0;
let computerScore = 0;
let Draw = 0;

let choice = ["rock", "paper", "Scissor"];

let choiceNumber = 0;

rock.addEventListener(`click`, function(e){
    e.preventDefault();

    choiceNumber++;
})

paper.addEventListener(`click`, function(e){
    e.preventDefault();

    choiceNumber += 2;
})

scissor.addEventListener(`click`, function(e){
    e.preventDefault();

    choiceNumber += 3;
})

let userChoice = 