let html = ``;

let id = 0;
document.querySelector('.js-add-bt').addEventListener('click', ()=>{
  
  id++;

  let todoData = document.querySelector('.js-todo').value;

  html += `
  <div class="js-part-todo-${id}">
    <span>${todoData}</span> <button class = "js-delete-bt-${id}">delete</button>
  </div>
  `;

  document.querySelector('.js-todoContainer').innerHTML = html;

  document.querySelector('.js-todo').value = '';

  
  console.log(id);
});

