const subscribe = document.querySelector('#subBT');

subscribe.addEventListener('click', function(e){
    e.preventDefault();

    if(subscribe.innerText === 'Subscribe'){
        subscribe.innerText = 'Subscribed'
        document.getElementById('subBT').style.color = 'black';
        document.getElementById('subBT').style.backgroundColor = 'rgba(197, 190, 190, 0.3)';
        // document.getElementById('subBT').style.border = 'none';
        
    }
    else{
        subscribe.innerText = 'Subscribe'
        document.getElementById('subBT').style.backgroundColor = 'black';
        document.getElementById('subBT').style.color = 'white';
        document.getElementById('subBT').style.border = '2px solid black';
    };
})

const essential = {
    input: document.querySelector('#amount'),
    calculateBT: document.querySelector('#amountSB'),
    total: document.querySelector('#total')
};

function sum (){

    let input123 = essential.input.value;

    if(+input123 <= 40){
        let abc = +input123 + 10;

        essential.total.innerText = `$${abc}`
    }
    else{
        let bcd = +input123
        essential.total.innerText = `$${bcd}`
    }
}

essential.calculateBT.addEventListener(`click`, function(e){
    e.preventDefault();

    sum();

    // console.log(Event)
})

essential.input.addEventListener('keydown', function(e){
    

    if(e.key === 'Enter'){
        e.preventDefault();
        sum();
    }
})