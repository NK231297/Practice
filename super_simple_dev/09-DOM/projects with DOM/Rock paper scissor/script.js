const score = {
    win: 0,
    lose: 0,
    draw: 0,
};

function function1 (num){
    let userMove = num;

    let compMove = Math.floor(Math.random() * 3) + 1;

    let result = userMove === compMove ? ('Draw', score.draw++) : 
    userMove === 1 && compMove === 2 ? ('Lose', score.lose++) : 
    userMove === 1 && compMove === 3 ? ('Win', score.win++) : 
    userMove === 2 && compMove === 1 ? ('Win', score.win++) : 
    userMove === 2 && compMove === 3 ? ('Lose', score.lose++) : 
    userMove === 3 && compMove === 1 ? ('Lose', score.lose++) : 
    userMove === 3 && compMove === 2 ? ('Win', score.win++) : 'error';

    localStorage.setItem('rock, paper, scissor', JSON.stringify(score));
    
};