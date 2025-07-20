const subscribe = document.querySelector('#subBT');

subscribe.addEventListener('click', function(e){
    e.preventDefault();

    if(subscribe.innerText === 'Subscribe'){
        subscribe.innerText = 'Subscribed'
    }
    else{
        subscribe.innerText = 'Subscribe'
    };
})

const essential = {
    input: document.querySelector('#amount'),
    calculateBT: document.querySelector('#amountSB')
};

function sum (cost){
    if(cost <= 40){
        return cost + 10 + '$';
    }
    else{
        return cost
    }
}

