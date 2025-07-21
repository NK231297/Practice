const costInput = document.querySelector('#cost');
const costSubmit = document.querySelector('#costSubmit');
const totalCost = document.querySelector('#total');

function function1 (input){
    input = +costInput.value
    if(input <= 40){
        totalCost.innerText = ((+input * 100) + (10 * 100)) / 100;
    }
    else{
        totalCost.innerText = +input;
    }


};

costSubmit.addEventListener('click', function(e){
    e.preventDefault();

    function1();
})

