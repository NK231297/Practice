const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

let roundsAsk = prompt("Please tell how much rounds you want to play");

let results = JSON.parse(localStorage.getItem('results')) || {
        win: 0,
        lose: 0,
        draw: 0
    }

let roundscomplete = 0;

let totalRounds = roundsAsk;

function desicion (num){
    let cMoveNumber = Math.floor(Math.random() * 3) + 1;

    let hMoveNumber = num;

    roundscomplete++
    let remainingRounds = totalRounds - roundscomplete;

    // console.log(`total rounds: ${totalRounds}`)
    // console.log(`rounds complete: ${roundscomplete}`)
    // console.log(`rounds remaining: ${remainingRounds}`)


    if(roundscomplete <= totalRounds){
        if(hMoveNumber === 1 && cMoveNumber === 2){
            results.lose += 1;
            const moveLog = {
                You: 'Rock',
                Computer: 'Paper',
                roundResult: 'You Lose!'
            };
            console.log(moveLog);
            
            //console.log("You: Rock");
            //console.log("Computer: Paper");
            //console.log("You Lose!");
        } //you lose
        else if(hMoveNumber === 1 && cMoveNumber === 3){
            results.win += 1;
            const moveLog = {
                You: 'Rock',
                Computer: 'Scissor',
                roundResult: 'You Win!'
            };
            console.log(moveLog);
            
            //console.log("You: Rock");
            //console.log("Computer: Scissor");
            //console.log("You Win!")
        } //you win
        else if(hMoveNumber === 2 && cMoveNumber === 1){
            results.win += 1;
            const moveLog = {
                You: 'Paper',
                Computer: 'Rock',
                roundResult: 'You Win!'
            };
            console.log(moveLog);
            
            //console.log("You: Paper");
            //console.log("Computer: Rock");
            //console.log("You Win!");
        } //you win
        else if(hMoveNumber === 2 && cMoveNumber === 3){
            results.lose += 1;
            const moveLog = {
                You: 'Paper',
                Computer: 'Scissor',
                roundResult: 'You Lose!'
            };
            console.log(moveLog);
            
            //console.log("You: Paper");
            //console.log("Computer: Scissor");
            //console.log("You Lose!");
        } //you lose
        else if(hMoveNumber === 3 && cMoveNumber === 1){
            results.lose += 1;
            const moveLog = {
                You: 'Scissor',
                Computer: 'Rock',
                roundResult: 'You Lose!'
            };
            console.log(moveLog);
            
            //console.log("You: Scissor");
            //console.log("Computer: Rock");
            //console.log("You Lose!");
        } //you lose
        else if(hMoveNumber === 3 && cMoveNumber === 2){
            results.win += 1;
            const moveLog = {
                You: 'Scissor',
                Computer: 'Paper',
                roundResult: 'You Win!'
            };
            console.log(moveLog);
            
            //console.log("You: Scissor");
            //console.log("Computer: Paper");
            //console.log("You Win!");
        } //you win
        else if(hMoveNumber === 1 && cMoveNumber === 1){
            results.draw += 1;
            const moveLog = {
                You: 'Rock',
                Computer: 'Rock',
                roundResult: 'Game Tie!'
            };
            console.log(moveLog);
            
            //console.log("You: Rock");
            //console.log("Computer: Rock");
            //console.log("Game Tie!");
        } //Draw
        else if(hMoveNumber === 2 && cMoveNumber === 2){
            results.draw += 1;
            const moveLog = {
                You: 'Paper',
                Computer: 'Paper',
                roundResult: 'Game Tie!'
            };
            console.log(moveLog);
            
            //console.log("You: Paper");
            //console.log("Computer: Paper");
            //console.log("Game Tie!");
        } //Draw
        else if(hMoveNumber === 3 && cMoveNumber === 3){
            results.draw += 1;
            const moveLog = {
                You: 'Scissor',
                Computer: 'Scissor',
                roundResult: 'Game Tie!'
            };
            console.log(moveLog);
            
            //console.log("You: Scissor");
            //console.log("Computer: Scissor");
            //console.log("Game Tie!");
        } //Draw
        else{
            console.log("Something went wrong")
        }
    }
    else{
        console.log("Game End.")
    }
    
    localStorage.setItem("results", JSON.stringify(results));
}


rock.addEventListener(`click`, function(e){
    e.preventDefault();

    desicion(1);
})
paper.addEventListener(`click`, function(e){
    e.preventDefault();
    
    desicion(2);
})
scissor.addEventListener(`click`, function(e){
    e.preventDefault();
    
    desicion(3);
})
result.addEventListener(`click`, function(e){
    e.preventDefault();
    
    console.log(results);
})

reset.addEventListener(`click`, function(){
    // e.preventDefault();

    localStorage.removeItem('results');

    location.reload();
})