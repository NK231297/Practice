const tossBT = {
    flip: document.getElementById('flip'),
    heads: document.getElementById('heads'),
    tails: document.getElementById('tails'),
    scoreBT: document.getElementById('score'),
    resetBT: document.getElementById('reset')
};

const score = {
    win: 0,
    lose: 0
};

function tossLogic (num){
    const userSide = num;

    let tossSide = Math.floor(Math.random() * 2) + 1;

    let result = userSide === tossSide ? (score.win++, 'Win') : (score.lose++, 'Lose');

    userSide === 1 ? console.log(`User choice: Heads`) : console.log(`User choice: Tails`);
    console.log(tossSide === 1 ? 'Heads' : 'Tails');
    console.log(result);

    localStorage.setItem('Toss', JSON.stringify(score));
};


tossBT.flip.addEventListener(`click`, function(e){
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    
    let result = randomNumber === 1 ? 'Heads' : 'Tails';

    console.log(result);

});

tossBT.heads.addEventListener(`click`, function(e){
    e.preventDefault();

    tossLogic(1);
});

tossBT.tails.addEventListener(`click`, function(e){
    e.preventDefault();

    tossLogic(2);
});

tossBT.scoreBT.addEventListener(`click`, function(e){
    e.preventDefault();
    
    let scoreLogs =  JSON.parse(localStorage.getItem('Toss'));
    console.log(scoreLogs);
})

tossBT.resetBT.addEventListener(`click`, function(e){
    e.preventDefault();

    localStorage.removeItem('Toss');
    console.log('Toss data cleared.');
})