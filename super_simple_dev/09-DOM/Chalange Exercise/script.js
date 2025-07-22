/*
const costInput = document.querySelector('#cost');
const costSubmit = document.querySelector('#costSubmit');
const totalCost = document.querySelector('#total');

const textInput = document.querySelector('#textInput');
const textSubmit = document.querySelector('#textSubmit');
const textPrint = document.querySelector('#textPrint');

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

function function2(){
    
};

textInput.addEventListener('keyup', function(e){
    e.preventDefault();

    textPrint.innerText = textInput.value;
})

textSubmit.addEventListener('click', function(e){
    e.preventDefault();

    textPrint.innerText = textInput.value;
})
*/

const printData = document.querySelector('#printData');

const buttons = {
    show: document.querySelector('#show'),
    add: document.querySelector('#add'),
    add2: document.querySelector('#add2'),
    add3: document.querySelector('#add3'),
    add4: document.querySelector('#add4'),
    add5: document.querySelector('#add5'),
    remove: document.querySelector('#remove'),
    remove2: document.querySelector('#remove2'),
    remove3: document.querySelector('#remove3')
};

let cart = 0;

const buyLimit = 10;


function function3(button){
    let emptySlot = buyLimit - cart;
    let filledSlot = buyLimit - emptySlot;
    
    if(button === 1){
        printData.innerText = `Cart quantity: ${cart}`
    }
    else if(button === 2){
        if(cart < 10){
            cart++;
            printData.innerText = 'Added 1pc'
        }
        else{
            printData.innerText = 'Buy limit full for this item.'
            
        }
    }
    else if(button === 3){
        
        cart += 2;
        printData.innerText = 'Added 2pc'
    }
    else if(button === 4){
        cart += 3;
        printData.innerText = 'Added 3pc'
    }
    else if(button === 5){
        cart += 4;
        printData.innerText = 'Added 4pc'
    }
    else if(button === 6){
        cart += 5;
        printData.innerText = 'Added 5pc'
    }
    else if(button === 7){
        if(cart > 0){
            cart -= 1;
            printData.innerText = 'Removed 1pc'
        }
        else{
            printData.innerText = 'Cart is empty.'

        }
    }
    else if(button === 8){
        if(cart > 0){
            let abc = Math.min(2, +filledSlot)
            cart -= abc
            // cart -= 2;
            printData.innerText = `Removed ${abc}`
        }
        else{
            printData.innerText = `Cart is Empty.`

        }
    }
    else if(button === 9){
        if(cart > 0){
            let abc = Math.min(3, +filledSlot)
            cart -= abc;
            printData.innerText = `Removed ${abc}`
        }
        else{
            printData.innerText = `Cart is Empty.`
        }
    }
};

buttons.show.addEventListener('click', function(e){
    e.preventDefault();

    function3(1);
})

buttons.add.addEventListener('click', function(e){
    e.preventDefault();

    function3(2);
})

buttons.add2.addEventListener('click', function(e){
    e.preventDefault();

    function3(3);
})

buttons.add3.addEventListener('click', function(e){
    e.preventDefault();

    function3(4);
})

buttons.add4.addEventListener('click', function(e){
    e.preventDefault();

    function3(5);
})

buttons.add5.addEventListener('click', function(e){
    e.preventDefault();

    function3(6);
})

buttons.remove.addEventListener('click', function(e){
    e.preventDefault();

    function3(7);
})

buttons.remove2.addEventListener('click', function(e){
    e.preventDefault();

    function3(8);
})

buttons.remove3.addEventListener('click', function(e){
    e.preventDefault();

    function3(9);
})