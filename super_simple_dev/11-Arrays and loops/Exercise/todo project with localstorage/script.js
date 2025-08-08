const todoInput     = document.querySelector('#todoInput');
const addBT         = document.querySelector('#addBT');
const deleteBT      = document.querySelector('#deleteBT');
const todoRender    = document.querySelector('#todoRender');
const dueDate       = document.querySelector('#dueDate');

const todoArray = [];

function createTodo(){
    const todoObj = {
        todo: todoInput.value,
        date: dueDate.value
    }

    todoInput.value = '';
    dueDate.value = '';

    return todoObj;
}

function addTodoToArr(){
    let result = createTodo();

    todoArray.push(result);

    console.log(todoArray);
}

function saveTodo(){
    localStorage.setItem('todoData', JSON.stringify(todoArray));
};

function deleteTodo(){
    let abc = todoArray.length - 1;
    todoArray.splice(abc, 1);
    localStorage.setItem('todoData', JSON.stringify(todoArray));
    console.log(todoArray);
}

addBT.addEventListener('click', function(){
    // createTodo();
    addTodoToArr();
    saveTodo();
})

deleteBT.addEventListener('click', function(){
    deleteTodo();
})

