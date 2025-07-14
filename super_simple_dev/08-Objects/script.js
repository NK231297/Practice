const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

let roundsAsk = prompt("Please tell how much rounds you want to play");

let results = {
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
            results.lose++;
            console.log("You: Rock");
            console.log("Computer: Paper");
            console.log("You Lose!");
        } //you lose
        else if(hMoveNumber === 1 && cMoveNumber === 3){
            results.win++;
            console.log("You: Rock");
            console.log("Computer: Scissor");
            console.log("You Win!")
        } //you win
        else if(hMoveNumber === 2 && cMoveNumber === 1){
            results.win++;
            console.log("You: Paper");
            console.log("Computer: Rock");
            console.log("You Win!");
        } //you win
        else if(hMoveNumber === 2 && cMoveNumber === 3){
            results.lose++;
            console.log("You: Paper");
            console.log("Computer: Scissor");
            console.log("You Lose!");
        } //you lose
        else if(hMoveNumber === 3 && cMoveNumber === 1){
            results.lose++;
            console.log("You: Scissor");
            console.log("Computer: Rock");
            console.log("You Lose!");
        } //you lose
        else if(hMoveNumber === 3 && cMoveNumber === 2){
            results.win++;
            console.log("You: Scissor");
            console.log("Computer: Paper");
            console.log("You Win!");
        } //you win
        else if(hMoveNumber === 1 && cMoveNumber === 1){
            results.draw++;
            console.log("You: Rock");
            console.log("Computer: Rock");
            console.log("Game Tie!");
        } //Draw
        else if(hMoveNumber === 2 && cMoveNumber === 2){
            results.draw++;
            console.log("You: Paper");
            console.log("Computer: Paper");
            console.log("Game Tie!");
        } //Draw
        else if(hMoveNumber === 3 && cMoveNumber === 3){
            results.draw++;
            console.log("You: Scissor");
            console.log("Computer: Scissor");
            console.log("Game Tie!");
        } //Draw
        else{
            console.log("Something went wrong")
        }
    }
    else{
        console.log("Game End.")
    }
    
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

reset.addEventListener(`click`, function(e){
    e.preventDefault();
    location.reload();
})