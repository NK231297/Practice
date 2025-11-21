function createTodo(){
  let todos = JSON.parse(localStorage.getItem('todo')) || [];

  let id = 0;

  todos.forEach((todo)=>{
    id = todo.todoId;
  })

  document.querySelector('.js-add-bt').addEventListener('click', ()=>{
  
  id++;

  let todoData = document.querySelector('.js-todo').value;

  todos.push({
    todoId: id,
    todo: todoData
  })

  localStorage.setItem('todo', JSON.stringify(todos));

  console.log(todos);

  renderTodo();
  
  });


};

function renderTodo(){
  let todos = JSON.parse(localStorage.getItem('todo')) || []; //Array
  
  let html = ``;

  todos.forEach((todo)=>{
    
    console.log(todo.todoId);
    console.log(todo.todo);
    
    
    html += `
      <div class="js-part-todo">
        <span>${todo.todo}</span> <button class = "js-delete-bt" data-todo-id="${todo.todoId}">delete</button>
      </div>    
    `
    
  })
  document.querySelector('.js-todoContainer').innerHTML = html;
};

function deleteTodo(){
  document.querySelectorAll('.js-delete-bt').forEach((button)=>{
    button.addEventListener('click', ()=>{

    let todos = JSON.parse(localStorage.getItem('todo'));

    let todoId = button.dataset.todoId;

    let matchArr;

    todos.forEach((todo)=>{
      if(todo.todoId === todoId){
        matchArr = todo;
      }
    })

    

    localStorage.setItem('todo', JSON.stringify(arr));

    renderTodo();

    })
  }) 
};







createTodo();
renderTodo();
deleteTodo();


// console.log(id);

/*
  let todoData = document.querySelector('.js-todo').value;

  html += `
  <div class="js-part-todo-${id}">
    <span>${todoData}</span> <button class = "js-delete-bt-${id}">delete</button>
  </div>
  `;

  document.querySelector('.js-todoContainer').innerHTML = html;

  document.querySelector('.js-todo').value = '';

  
  console.log(id);
  */

