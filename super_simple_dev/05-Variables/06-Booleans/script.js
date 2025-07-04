const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

let yourScore = 0;
let computerScore = 0;
let Draw = 0;

rock.addEventListener(`click`, function(e){
    e.preventDefault();

    let randomNumber = Math.floor((Math.random() * 3) + 1);

    let yourMove = 1;

    console.log(`Your Move is: #Rock`);

    if(randomNumber === 1){
        let computerMove = 'Rock';
        console.log(`Computer Move is: #${computerMove}`)
        
    }
    else if(randomNumber === 2){
        let computerMove = 'Paper';
        console.log(`Computer Move is: #${computerMove}`)
    }
    else if(randomNumber === 3){
        let computerMove = 'Scissor';
        console.log(`Computer Move is: #${computerMove}`)
    }

    let result = randomNumber === 1 ? "Draw" :
                 randomNumber === 2 ? "Computer Win" : "You Win";

    
    let score = randomNumber === 1 ? Draw++ :
                randomNumber === 2 ? computerScore++ : yourScore++;

                console.log(result);
                console.log(`Your score is: ${yourScore}`);
                console.log(`Computer score is: ${computerScore}`);
                console.log(`Draws are: ${Draw}`);
    // console.log(randomNumber);
})

paper.addEventListener(`click`, function(e){
    e.preventDefault();

    let yourMove = 2;

    console.log('Your Move is: #Paper');

    let randomNumber = Math.floor((Math.random() * 3) + 1);

    let computerMove = randomNumber === 1 ? "Rock" : 
                       randomNumber === 2 ? "Paper" : 
                       "Scissor";
    console.log(computerMove);

    let result = randomNumber === 1 ? "You Win" : 
                 randomNumber === 2 ? "Draw" : "Computer Win";

    let score = randomNumber === 1 ? yourScore++ :
                randomNumber === 2 ? Draw++ : computerScore++;

                console.log(result);
                console.log(`Your score is: ${yourScore}`);
                console.log(`Computer score is: ${computerScore}`);
                console.log(`Draws are: ${Draw}`);


    // console.log(randomNumer);
})

scissor.addEventListener(`click`, function(e){
    e.preventDefault();

    let youMove = 3;

    console.log('Your Move is: #Scissor');

    let randomNumber = Math.floor((Math.random() * 3) + 1);

    let computerMove = randomNumber === 1 ? "Rock" : 
                       randomNumber === 2 ? "Paper" : "Scissor";

    console.log(computerMove);

    let result = randomNumber === 1 ? "Computer Win" : 
                 randomNumber === 2 ? "You Win" : "Draw" ;

    

    let score = randomNumber === 1 ? computerScore++ :
                randomNumber === 2 ? yourScore++ : Draw++;

                console.log(result);
                console.log(`Your score is: ${yourScore}`);
                console.log(`Computer score is: ${computerScore}`);
                console.log(`Draws are: ${Draw}`);
})

