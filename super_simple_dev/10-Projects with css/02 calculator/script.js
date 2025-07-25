const numpad = {
    num1: document.getElementById('num1'),
    num2: document.getElementById('num2'),
    num3: document.getElementById('num3'),
    num4: document.getElementById('num4'),
    num5: document.getElementById('num5'),
    num6: document.getElementById('num6'),
    num7: document.getElementById('num7'),
    num8: document.getElementById('num8'),
    num9: document.getElementById('num9'),
    num0: document.getElementById('num0'),
    numdot: document.getElementById('numDot')
};

const equations = {
    plus: document.getElementById('plus'),
    minus: document.getElementById('minus'),
    multiply: document.getElementById('multiply'),
    divide: document.getElementById('divide'),
    equal: document.getElementById('equal')
};

const essential = {
    clear: document.getElementById('clear'),
    clearHis: document.getElementById('clearHis'),
    lastResult: document.getElementById('getLastResult'),
    resultPrint: document.querySelector('#resultPrint')
};

let calculation = '';

function function1(input){
    if(input === 1){
        calculation += 1;
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 2){
        calculation += 2;
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 3){
        calculation += 3;
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 4){
        calculation += 4;
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 5){
        calculation += 5;
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 6){
        calculation += 6;
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 7){
        calculation += 7;
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 8){
        calculation += 8;
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 9){
        calculation += 9;
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 10){
        calculation += 0;
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 19){
        calculation += '.';
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 11){
        calculation += ' + ';
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 12){
        calculation += ' - ';
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 13){
        calculation += ' * ';
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 14){
        calculation += ' / ';
        essential.resultPrint.innerText = calculation;
    }
    else if(input === 15){
        let abc = eval(calculation);
        localStorage.setItem('calculation', abc);
        essential.resultPrint.innerText = abc;
    }
    else if(input === 16){
        essential.resultPrint.innerText = localStorage.getItem('calculation');
    }
    else if(input === 17){
        calculation = '';
        essential.resultPrint.innerText = 'Cleared.';
    }
    else if(input === 18){
        localStorage.removeItem('calculation');
        essential.resultPrint.innerText = 'Cleared history.';
    }

};



numpad.num1.addEventListener('click', function(e){
    e.preventDefault();
    function1(1)
});

numpad.num2.addEventListener('click', function(e){
    e.preventDefault();
    function1(2);
});

numpad.num3.addEventListener('click', function(e){
    e.preventDefault();
    function1(3);
});

numpad.num4.addEventListener('click', function(e){
    e.preventDefault();
    function1(4);
});

numpad.num5.addEventListener('click', function(e){
    e.preventDefault();
    function1(5);
});

numpad.num6.addEventListener('click', function(e){
    e.preventDefault();
    function1(6);
});

numpad.num7.addEventListener('click', function(e){
    e.preventDefault();
    function1(7);
});

numpad.num8.addEventListener('click', function(e){
    e.preventDefault();
    function1(8);
});

numpad.num9.addEventListener('click', function(e){
    e.preventDefault();
    function1(9);
});

numpad.num0.addEventListener('click', function(e){
    e.preventDefault();
    function1(10);
});

numpad.numdot.addEventListener('click', function(e){
    e.preventDefault();
    function1(19);
});

equations.plus.addEventListener('click', function(e){
    e.preventDefault();

    function1(11);
});

equations.minus.addEventListener('click', function(e){
    e.preventDefault();
    function1(12);
});

equations.multiply.addEventListener('click', function(e){
    e.preventDefault();
    function1(13);
});

equations.divide.addEventListener('click', function(e){
    e.preventDefault();

    function1(14);
})

equations.equal.addEventListener('click', function(e){
    e.preventDefault();
    
    function1(15);
});

essential.lastResult.addEventListener('click', function(e){
    e.preventDefault();

    function1(16);
});

essential.clearHis.addEventListener('click', function(e){
    e.preventDefault();

    function1(18);
});

essential.clear.addEventListener('click', function(e){
    e.preventDefault();

    function1(17);
});

