function createTodo(){
  let todos = JSON.parse(localStorage.getItem('todo')) || [];

  let id = todos.length > 0 ? todos[todos.length - 1].todoId : 0;

  /*
  todos.forEach((todo)=>{
    id = todo.todoId;
  })
  */

  document.querySelector('.js-add-bt').addEventListener('click', ()=>{

  let todos = JSON.parse(localStorage.getItem('todo')) || [];
  
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

  document.querySelector('.js-todo').addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){

      let todos = JSON.parse(localStorage.getItem('todo')) || [];

      let todoData = document.querySelector('.js-todo').value;

      id++;

      todos.push({
        todoId: id,
        todo: todoData
      });

      saveToStorage('todo', todos);

      console.log(todos);

      renderTodo();
    }
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
        <span>${todo.todo}</span> <button class = "js-delete-bt" data-todo-id="${todo.todoId}">Delete</button>
      </div>    
    `
    
  })
  document.querySelector('.js-todoContainer').innerHTML = html;

  deleteTodo();
};

function deleteTodo(){
  document.querySelectorAll('.js-delete-bt').forEach((button)=>{
    button.addEventListener('click', ()=>{

    let todos = JSON.parse(localStorage.getItem('todo'));

    let todoId = button.dataset.todoId;

    let newArr = todos.filter((todo)=>{
      return todo.todoId != todoId;
    })

    todos = newArr;

    console.log(todos);

    saveToStorage('todo', todos);

    renderTodo();

    })
  }) 
};

function saveToStorage(key, data){
  localStorage.setItem(key, JSON.stringify(data));
};




createTodo();
renderTodo();
deleteTodo();

