const flip = document.getElementById('flip');
const heads = document.getElementById('heads');
const tails = document.getElementById('tails');
const score = document.getElementById('score');

let win = 0;
let lose = 0;

flip.addEventListener(`click`, function(e){
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    
    let result = randomNumber === 1 ? 'Heads' : 'Tails';

    console.log(result);

});

heads.addEventListener(`click`, function(e){
    e.preventDefault();

    const userSide = 1;

    let tossSide = Math.floor(Math.random() * 2) + 1;

    let result = userSide === tossSide ? (win++, 'Win') : (lose++, 'Lose');

    console.log(`User choice: Heads`);
    console.log(tossSide === 1 ? 'Heads' : 'Tails');
    console.log(result);


});

tails.addEventListener(`click`, function(e){
    e.preventDefault();

    const userSide = 2;

});

score.addEventListener(`click`, function(e){
    e.preventDefault();

    console.log(`Win: ${win}`);
    console.log(`Lose: ${lose}`)
})
