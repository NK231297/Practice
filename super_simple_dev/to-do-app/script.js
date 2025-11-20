function renderTodo(){
  let todos = JSON.parse(localStorage.getItem('todo')) || [];

  let id = 0;
  document.querySelector('.js-add-bt').addEventListener('click', ()=>{
  
  id++;

  let todoData = document.querySelector('.js-todo').value;

  todos.push({
    todo: todoData
  })

  localStorage.setItem('todo', JSON.stringify(todos));

  console.log(todos);

  
  
  });


};

let html = ``;



console.log(id);

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

//hello two 3