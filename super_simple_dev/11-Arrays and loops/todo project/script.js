const todoInput     = document.querySelector('#todoInput');
const addBT         = document.querySelector('#addBT');
const deleteBT      = document.querySelector('#deleteBT');
const todoRender    = document.querySelector('#todoRender');
const dueDate       = document.querySelector('#dueDate');


const todoArray = [];

function function1(){
    
    todoArray.push({
        todo: todoInput.value,
        date: dueDate.value
    });
    todoInput.value = '';
    dueDate.value = '';
    
}

function function2(){
    todoRender.innerHTML = ``;

    for(let i = 0; i < todoArray.length; i++){
    let html = `<p> <span id = "todo">${todoArray[i].todo}</span> <span id = "date">${todoArray[i].date}</span> <button id = "deleteBT" onclick="function3(${i})">Delete</button> </p>`
    
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