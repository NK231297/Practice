const todoInput = document.querySelector('#todoInput');
const dateInput = document.querySelector('#dateInput');
const addBT = document.querySelector('#addBT');
// const deleteBT = document.querySelector('.js-delete-todo-button');
const renderElement = document.querySelector('#render');

// const todoArray = JSON.parse(localStorage.getItem('todos')) || [];

function addTodo(){
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    todos.push({todo: todoInput.value, date: dateInput.value});
    
    localStorage.setItem('todos', JSON.stringify(todos));
    
    todoInput.value = '';
    dateInput.value = '';

    console.log(todos);
};

function renderTodo(){
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    renderElement.innerHTML = '';
    
    todos.forEach(function(value, index){
        let html = 
        `
        <p>${index + 1}. <span id = "todo"> ${value.todo} </span> <span id = "date"> ${value.date} </span> <button class = "js-delete-todo-button"> Delete </button> </p>
        `
        renderElement.innerHTML += html;
    })
    

    document.querySelectorAll('.js-delete-todo-button').forEach((individualBT, index)=>{
        individualBT.addEventListener('click', ()=>{
            todos.splice(index, 1)

            localStorage.setItem('todos', JSON.stringify(todos));

            renderTodo();
        })
    })
};


addBT.addEventListener('click', function(){
    addTodo();
    renderTodo();
})

renderTodo();