const todoInput     = document.querySelector('#todoInput');
const addBT         = document.querySelector('#addBT');
const deleteBT      = document.querySelector('#deleteBT');
const todoRender    = document.querySelector('#todoRender');
const dueDate       = document.querySelector('#dueDate');

const todoArray = [];

/*This function only creates and return todo object outside of function and nothing else like adding that object in array or something.*/

function createTodo(){
    const todoObj = {
        todo: todoInput.value,
        date: dueDate.value
    }

    todoInput.value = '';
    dueDate.value = '';

    return todoObj;
}

/*This function only catch and save value that returns from function todoObject and put that into the array.*/

function addTodoToArr(){
    let result = createTodo();

    todoArray.push(result);

    console.log(todoArray);
}

/*This function only saves todo array to the local storage*/

function saveTodo(){
    localStorage.setItem('todoData', JSON.stringify(todoArray));
};

/*This function deletes last item of array and then save main array to the storage.*/

function deleteTodo(){
    let abc = todoArray.length - 1;
    let def = JSON.parse(localStorage.getItem('todoData'));

    def.splice(abc, 1);

    localStorage.setItem('todoData', JSON.stringify(def));
    console.log(JSON.parse(localStorage.getItem('todoData')));
}



addBT.addEventListener('click', function(){
    // createTodo();
    addTodoToArr();
    saveTodo();
})

deleteBT.addEventListener('click', function(){
    deleteTodo();
})

