const num1 = document.getElementById(`num1`);
const num2 = document.getElementById(`num2`);
const num3 = document.getElementById(`num3`);
const num4 = document.getElementById(`num4`);
const num5 = document.getElementById(`num5`);
const num6 = document.getElementById(`num6`);
const num7 = document.getElementById(`num7`);
const num8 = document.getElementById(`num8`);
const num9 = document.getElementById(`num9`);
const num0 = document.getElementById(`num0`);
const plus = document.getElementById(`plus`);
const minus = document.getElementById(`minus`);
const multiply = document.getElementById(`multiply`);
const divide = document.getElementById(`divide`);
const equal = document.getElementById(`equal`);
const clear = document.getElementById(`clear`);


let calculation = '';

num1.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += '1'
    console.log(calculation);
})
num2.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += '2'
    console.log(calculation);
})
num3.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += '3'
    console.log(calculation);
})
num4.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += '4'
    console.log(calculation);
})
num5.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += '5'
    console.log(calculation);
})
num6.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += '6'
    console.log(calculation);
})
num7.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += '7'
    console.log(calculation);
})
num8.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += '8'
    console.log(calculation);
})
num9.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += '9'
    console.log(calculation);
})
num0.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += '0'
    console.log(calculation);
})
plus.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += ' + '
    console.log(calculation);
})
minus.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += ' - '
    console.log(calculation);
})
multiply.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += ' * '
    console.log(calculation);
})
divide.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation += ' / '
    console.log(calculation);
})
equal.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation = eval(calculation);
    console.log(calculation);
})
clear.addEventListener(`click`, function(e){
    e.preventDefault();

    calculation = ''
    console.log('cleared');
})

