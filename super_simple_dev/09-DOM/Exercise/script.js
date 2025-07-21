const button9a = document.querySelector('#button9a');
const button9b = document.querySelector('#button9b');
const heads = document.querySelector('#heads');
const tails = document.querySelector('#tails');
const nameInput = document.querySelector('#nameInput');
// const nameSubmit = document.querySelector('#nameSubmit');
// const showName = document.querySelector('#showName');


button9a.addEventListener('click', function(e){
    e.preventDefault();
    console.log(button9a);
})

function shortCut (putElement, putString){
    // putElement.innerText = putString;

    document.querySelector(`#${putElement}`).innerText = putString;
}

button9b.addEventListener('click', function(e){
    e.preventDefault();

    if(button9b.innerText === '9b'){
        // button9b.innerText = '9b done'
        shortCut('button9b', '9b done')
    }
    else{
        // button9b.innerText = '9b'
        shortCut('button9b', '9b')
    }
})

heads.addEventListener('click', function(e){
    e.preventDefault();

    // document.querySelector('#choice').innerText = 'You chose Heads.'
    shortCut('choice', 'You chose Heads.');
})
tails.addEventListener('click', function(e){
    e.preventDefault();

    // document.querySelector('#choice').innerText = 'You chose Tails.'
    shortCut('choice', 'You chose Tails.')
})

nameSubmit.addEventListener('click', function(e){
    e.preventDefault();

    // showName.innerText = `Your name is: ${nameInput.value}`;
    shortCut('showName', `Your name is: ${nameInput.value}`);
})

nameInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        // showName.innerText = `Your name is: ${nameInput.value}`;
        shortCut('showName', `Your name is: ${nameInput.value}`);
    }
})
