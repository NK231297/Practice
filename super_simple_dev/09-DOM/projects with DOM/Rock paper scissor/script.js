const moves = {
    rock: document.querySelector('#rock'),
    paper: document.querySelector('#paper'),
    scissor: document.querySelector('#scissor'),
};
const essential = {
    reset: document.querySelector('reset')
};

const score = {
    win: 0,
    lose: 0,
    draw: 0
};

let scoreDOM = document.querySelector('#score');
let moveDOM = document.querySelector('#move');

const move = {
    youMove: '',
    comMove: ''
};


function function1(num){
    let humanMove = num;
    let compumove = Math.floor(Math.random() * 3) + 1;

    if( humanMove === 1 && compumove === 2 ){
        score.lose ++;
        console.log('You: Rock')
        console.log('Computer: Paper')
        console.log('lose')
        move.youMove = 'Rock'
        move.comMove = 'Paper'
    }//lose
    else if( humanMove === 1 && compumove === 3 ){
        score.win++;
        console.log('You: Rock')
        console.log('Computer: Scissor')
        console.log('win');
        move.youMove = 'Rock';
        move.comMove = 'Scissor';
    }//win
    else if( humanMove === 2 && compumove === 1 ){
        score.win++;
        console.log('You: Paper')
        console.log('Computer: Rock')
        console.log('win')
        move.youMove = 'Paper'
        move.comMove = 'Rock'
    }//win
    else if( humanMove === 2 && compumove === 3 ){
        score.lose++;
        console.log('You: Paper')
        console.log('Computer: Scissor')
        console.log('lose')
        move.youMove = 'Paper'
        move.comMove = 'Scissor'
    }//lose
    else if( humanMove === 3 && compumove === 1 ){
        score.lose++;
        console.log('You: Scissor')
        console.log('Computer: Rock')
        console.log('lose')
        move.youMove = 'Scissor'
        move.comMove = 'Rock'
        
    }//lose
    else if( humanMove === 3 && compumove === 2 ){
        score.win++;
        console.log('You: Scissor')
        console.log('Computer: Paper')
        console.log('win')
        move.youMove = 'Scissor'
        move.comMove = 'Paper'
    }//win
    else{
        score.draw++;
        console.log('Draw!');
        if(humanMove === 1 && compumove === 1){
            move.youMove = 'Rock'
            move.comMove = 'Rock'
        }
        else if (humanMove === 2 && compumove === 2){
            move.youMove = 'Paper'
            move.comMove = 'Paper'
        }
        else if (humanMove === 3 && compumove === 3){
            move.youMove = 'Scissor'
            move.comMove = 'Scissor'
        }
        else{
            console.log('error');
        }
    }//draw

    scoreDOM.innerText = `Win: ${score.win} | Lose: ${score.lose} | Draw: ${score.draw}`
    moveDOM.innerText = `You: ${move.youMove} | Computer: ${move.comMove}`

}




moves.rock.addEventListener(`click`, function(e){
e.preventDefault();
function1(1)
// console.log('Rock');
})
moves.paper.addEventListener(`click`, function(e){
e.preventDefault();
function1(2)
// console.log('Paper');
})
moves.scissor.addEventListener(`click`, function(e){
e.preventDefault();
function1(3)
// console.log('Scissor');
})



