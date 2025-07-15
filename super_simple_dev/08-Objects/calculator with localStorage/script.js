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
    num0: document.getElementById('num0')
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
    lastResult: document.getElementById('getLastResult')
};

let calculation = '';

function num (num){
    calculation += `${num}`;
    console.log(calculation);
};

function equation (sign){
    calculation += sign;
    console.log(calculation);
};



numpad.num1.addEventListener('click', function(e){
    e.preventDefault();
    num(1);
});

numpad.num2.addEventListener('click', function(e){
    e.preventDefault();
    num(2);
});

numpad.num3.addEventListener('click', function(e){
    e.preventDefault();
    num(3);
});

numpad.num4.addEventListener('click', function(e){
    e.preventDefault();
    num(4);
});

numpad.num5.addEventListener('click', function(e){
    e.preventDefault();
    num(5);
});

numpad.num6.addEventListener('click', function(e){
    e.preventDefault();
    num(6);
});

numpad.num7.addEventListener('click', function(e){
    e.preventDefault();
    num(7);
});

numpad.num8.addEventListener('click', function(e){
    e.preventDefault();
    num(8);
});

numpad.num9.addEventListener('click', function(e){
    e.preventDefault();
    num(9);
});

numpad.num0.addEventListener('click', function(e){
    e.preventDefault();
    num(0);
});

equations.plus.addEventListener('click', function(e){
    e.preventDefault();

    equation(' + ');
});

equations.minus.addEventListener('click', function(e){
    e.preventDefault();
    equation(' - ');
});

equations.multiply.addEventListener('click', function(e){
    e.preventDefault();
    equation(' * ');
});

equations.divide.addEventListener('click', function(e){
    e.preventDefault();

    equation(' / ');
})

equations.equal.addEventListener('click', function(e){
    e.preventDefault();
    
    calculation = eval(calculation)
    localStorage.setItem('Last calculation result', calculation);
    console.log(calculation);
    calculation = '';
});

essential.clear.addEventListener('click', function(e){
    e.preventDefault();

    calculation = ''
    console.log(`Calculation cleared ${calculation}`);
});

essential.clearHis.addEventListener('click', function(e){
    e.preventDefault();

    localStorage.removeItem('Last calculation result');
    console.log('Calculator history cleared');
});

essential.lastResult.addEventListener('click', function(e){
    e.preventDefault();

    console.log(localStorage.getItem('Last calculation result'));
});