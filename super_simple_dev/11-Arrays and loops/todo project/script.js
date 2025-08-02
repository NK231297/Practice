const todoInput     = document.querySelector('#todoInput');
const addBT         = document.querySelector('#addBT');
const deleteBT      = document.querySelector('#deleteBT');
const todoRender    = document.querySelector('#todoRender');


const todoArray = [];

function function1(){
    todoArray.push(todoInput.value);
    todoInput.value = '';
    
}

function function2(){
    todoRender.innerHTML = ``;

    for(let i = 0; i < todoArray.length; i++){
    let html = `<p>${todoArray[i]} <button onclick="function3(${i})">Delete</button> </p>`
    
        todoRender.innerHTML += html;
    }
    
}

function function3(index){
    todoArray.splice(index, 1);
    function2();
}

addBT.addEventListener('click', function(){

function1();
function2();

    
})