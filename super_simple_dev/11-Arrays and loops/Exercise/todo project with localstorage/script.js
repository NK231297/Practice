const todoInput     = document.querySelector('#todoInput');
const addBT         = document.querySelector('#addBT');
// const deleteBT      = document.querySelector('#deleteBT');
const todoRender    = document.querySelector('#todoRender');
const dueDate       = document.querySelector('#dueDate');

const todoArray = [];

function createTodo(){
    const todo = {
        todo: todoInput.value,
        date: dueDate.value
    }

    todoInput.value = '';
    dueDate.value = '';

    todoArray.push(todo);
    localStorage.setItem('todoData' ,JSON.stringify(todo));
    console.log(todoArray);
}

function renderData(){
    for(let i = 0; i < todoArray.length; i++){
        let html =
        `
        <p>
            <span id = "todo"> ${todoArray[i].todo} </span>
            <span id = "date"> ${todoArray[i].date} </span>
            <button id = "deleteBT"> Delete </button>
        </p>
        `
        todoRender.innerHTML += html;
    }
};

addBT.addEventListener('click', function(){
    createTodo();
    renderData();
})