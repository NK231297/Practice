const moves = {
    rock: document.querySelector('#rock'),
    paper: document.querySelector('#paper'),
    scissor: document.querySelector('#scissor'),
};
const essential = {
    reset: document.querySelector('#reset')
};

const DOMText = {
    scoreDOM: document.querySelector('#score'),
    moveDOM: document.querySelector('#move'),
    desicionDOM: document.querySelector('#desicion')
};


const move = {
    youMove: '',
    comMove: ''
};



function function1(num){
    
    const score = JSON.parse(localStorage.getItem('Index 1')) || {
        win: 0,
        lose: 0,
        draw: 0
    }

    let humanMove = num;
    let compumove = Math.floor(Math.random() * 3) + 1;

    if( humanMove === 1 && compumove === 2 ){
        score.lose ++;
        console.log('You: Rock')
        console.log('Computer: Paper')
        console.log('lose')
        move.youMove = 'Rock'
        move.comMove = 'Paper'
        DOMText.desicionDOM.innerHTML = `You lose !`
    }//lose
    else if( humanMove === 1 && compumove === 3 ){
        score.win++;
        console.log('You: Rock')
        console.log('Computer: Scissor')
        console.log('win');
        move.youMove = 'Rock';
        move.comMove = 'Scissor';
        DOMText.desicionDOM.innerHTML = `You win !`
    }//win
    else if( humanMove === 2 && compumove === 1 ){
        score.win++;
        console.log('You: Paper')
        console.log('Computer: Rock')
        console.log('win')
        move.youMove = 'Paper'
        move.comMove = 'Rock'
        DOMText.desicionDOM.innerHTML = `You win !`
    }//win
    else if( humanMove === 2 && compumove === 3 ){
        score.lose++;
        console.log('You: Paper')
        console.log('Computer: Scissor')
        console.log('lose')
        move.youMove = 'Paper'
        move.comMove = 'Scissor'
        DOMText.desicionDOM.innerHTML = `You lose !`
    }//lose
    else if( humanMove === 3 && compumove === 1 ){
        score.lose++;
        console.log('You: Scissor')
        console.log('Computer: Rock')
        console.log('lose')
        move.youMove = 'Scissor'
        move.comMove = 'Rock'
        DOMText.desicionDOM.innerHTML = `You lose !`
        
    }//lose
    else if( humanMove === 3 && compumove === 2 ){
        score.win++;
        console.log('You: Scissor')
        console.log('Computer: Paper')
        console.log('win')
        move.youMove = 'Scissor'
        move.comMove = 'Paper'
        DOMText.desicionDOM.innerHTML = `You win !`
    }//win
    else{
        score.draw++;
        console.log('Draw!');
        DOMText.desicionDOM.innerHTML = `Game draw !`
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


    localStorage.setItem('Index 1', JSON.stringify(score));

    DOMText.scoreDOM.innerText = `Win: ${score.win} | Lose: ${score.lose} | Draw: ${score.draw}`
    DOMText.moveDOM.innerText = `You: ${move.youMove} | Computer: ${move.comMove}`
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

essential.reset.addEventListener(`click`, function(e){
    e.preventDefault;

    localStorage.removeItem('Index 1');
    DOMText.moveDOM.innerHTML = `Moves cleared`;
    DOMText.scoreDOM.innerHTML = `Score Cleared Permanently`;
    DOMText.desicionDOM.innerHTML = `Desicion cleared.`;
})

