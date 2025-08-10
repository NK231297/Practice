const todoInput = document.querySelector('#todoInput');
const dateInput = document.querySelector('#dateInput');
const addBT = document.querySelector('#addBT');
const renderElement = document.querySelector('#render');

function addTodo(){
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    todos.push({todo: todoInput.value, date: dateInput.value});
    
    localStorage.setItem('todos', JSON.stringify(todos));
    
    todoInput.value = '';
    dateInput.value = '';

    console.log(todos);
};

function renderTodo(){
    let todos = JSON.parse(localStorage.getItem('todos'));

    renderElement.innerHTML = '';

    for(let i = 0; i < todos.length; i++){
        let html = 
        `
        <p>${i + 1}. <span id = "todo"> ${todos[i].todo} </span> <span id = "date"> ${todos[i].date} </span> <button onclick = "deleteTodo(${i})"> Delete </button> </p>
        `
        renderElement.innerHTML += html;
    }
};

function deleteTodo(index){
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(todos));

    renderTodo();
};

addBT.addEventListener('click', function(){
    addTodo();
    renderTodo();
})

renderTodo();