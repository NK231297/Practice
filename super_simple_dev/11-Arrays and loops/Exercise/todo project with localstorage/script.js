const todoInput     = document.querySelector('#todoInput');
const addBT         = document.querySelector('#addBT');
const deleteBT      = document.querySelector('#deleteBT');
const todoRender    = document.querySelector('#todoRender');
const dueDate       = document.querySelector('#dueDate');


const todoArray = [];


function addToArray(){
    const todo = {
        todo: todoInput.value,
        date: dueDate.value
    };
    
    todoInput.value = '';
    dueDate.value = '';
    
    todoArray.push(todo);
    
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    
}

function todoRenderer(){
    let todoHTML = '';
    for(let i = 0; i < todoArray.length; i++){
        let savedTodo = JSON.parse(localStorage.getItem('todoArray'));
        let html = `<p> <span id = "todo">${savedTodo[i].todo}</span> <span id = "date">${savedTodo[i].date}</span> <button id = "deleteBT">Delete</button> </p>`
        
        todoHTML += html;
        
        
    }
    todoRender.innerHTML = todoHTML;
}

function deleteTodo(){
    
}

addBT.addEventListener('click', function(){

addToArray();
todoRenderer();

    
})