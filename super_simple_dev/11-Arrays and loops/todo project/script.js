const inputField = document.querySelector('#todoInput');
const todo = document.querySelector('#todo');
const todoSubmit = document.querySelector('#todoSubmit');

const todoList = [];

function rendertodo(){
    let todoListHTML = '';
    for(let i = 0; i < todoList.length; i++){
        let todoItem = todoList[i];

        let html = `<p>${todoItem}</p>`

        todoListHTML += html;

    }
    todo.innerHTML = todoListHTML;
}

function todoArray(){
    let todoValue = inputField.value;
    
    todoList.push(todoValue);
    
    console.log(todoList);
    
    inputField.value = '';
};

todoSubmit.addEventListener('click', function(){
    todoArray();
    rendertodo();
    
})

inputField.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        todoArray();
        rendertodo();
    }
})
