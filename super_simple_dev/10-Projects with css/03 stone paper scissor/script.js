const moves = {
    rock: document.querySelector('#rock'),
    paper: document.querySelector('#paper'),
    scissor: document.querySelector('#scissor'),
};
const essential = {
    reset: document.querySelector('#reset')
};

const DOMText = {
    scoreDOM1: document.querySelector('#winNum'),
    scoreDOM2: document.querySelector('#loseNum'),
    scoreDOM3: document.querySelector('#drawNum'),
    moveDOM1: document.querySelector('#you'),
    moveDOM2: document.querySelector('#computer'),
    desicionDOM: document.querySelector('#desicion')
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
        DOMText.moveDOM1.innerHTML = '&#9994'
        DOMText.moveDOM2.innerHTML = '&#9995'
        DOMText.desicionDOM.innerHTML = `You lose !`
    }//lose
    else if( humanMove === 1 && compumove === 3 ){
        score.win++;
        console.log('You: Rock')
        console.log('Computer: Scissor')
        console.log('win');
        DOMText.moveDOM1.innerHTML = '&#9994';
        DOMText.moveDOM2.innerHTML = '&#9996';
        DOMText.desicionDOM.innerHTML = `You win !`
    }//win
    else if( humanMove === 2 && compumove === 1 ){
        score.win++;
        console.log('You: Paper')
        console.log('Computer: Rock')
        console.log('win')
        DOMText.moveDOM1.innerHTML = '&#9995'
        DOMText.moveDOM2.innerHTML = '&#9994'
        DOMText.desicionDOM.innerHTML = `You win !`
    }//win
    else if( humanMove === 2 && compumove === 3 ){
        score.lose++;
        console.log('You: Paper')
        console.log('Computer: Scissor')
        console.log('lose')
        DOMText.moveDOM1.innerHTML = '&#9995'
        DOMText.moveDOM2.innerHTML = '&#9996'
        DOMText.desicionDOM.innerHTML = `You lose !`
    }//lose
    else if( humanMove === 3 && compumove === 1 ){
        score.lose++;
        console.log('You: Scissor')
        console.log('Computer: Rock')
        console.log('lose')
        DOMText.moveDOM1.innerHTML = '&#9996'
        DOMText.moveDOM2.innerHTML = '&#9994'
        DOMText.desicionDOM.innerHTML = `You lose !`
        
    }//lose
    else if( humanMove === 3 && compumove === 2 ){
        score.win++;
        console.log('You: Scissor')
        console.log('Computer: Paper')
        console.log('win')
        DOMText.moveDOM1.innerHTML = '&#9996'
        DOMText.moveDOM2.innerHTML = '&#9995'
        DOMText.desicionDOM.innerHTML = `You win !`
    }//win
    else{
        score.draw++;
        console.log('Draw!');
        DOMText.desicionDOM.innerHTML = `Game draw !`
        if(humanMove === 1 && compumove === 1){
            DOMText.moveDOM1.innerHTML = '&#9994'
            DOMText.moveDOM2.innerHTML = '&#9994'
        }
        else if (humanMove === 2 && compumove === 2){
            DOMText.moveDOM1.innerHTML = '&#9995'
            DOMText.moveDOM2.innerHTML = '&#9995'
        }
        else if (humanMove === 3 && compumove === 3){
            DOMText.moveDOM1.innerHTML = '&#9996'
            DOMText.moveDOM2.innerHTML = '&#9996'
        }
        else{
            console.log('error');
        }
    }//draw


    localStorage.setItem('Index 1', JSON.stringify(score));

    DOMText.scoreDOM1.innerText = score.win
    DOMText.scoreDOM2.innerText = score.lose
    DOMText.scoreDOM3.innerText = score.draw
    // DOMText.moveDOM.innerHTML = `You: ${DOMText.moveDOM1.innerHTML} | Computer: ${DOMText.moveDOM2.innerHTML}`
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
    DOMText.moveDOM1.innerHTML = ` - `;
    DOMText.moveDOM2.innerHTML = ` - `;
    DOMText.scoreDOM1.innerHTML = ` - `;
    DOMText.scoreDOM2.innerHTML = ` - `;
    DOMText.scoreDOM3.innerHTML = ` - `;
    DOMText.desicionDOM.innerHTML = `Desicion cleared.`;
})

