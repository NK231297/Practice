const todoInput     = document.querySelector('#todoInput');
const addBT         = document.querySelector('#addBT');
const deleteBT      = document.querySelector('#deleteBT');
const todoRender    = document.querySelector('#todoRender');

const todoArray = [];


let todoHTML = ''; 


addBT.addEventListener('click', function(){
    let todoValue = todoInput.value;

    todoArray.push(todoValue);
    
    todoInput.value = '';

    let html = `<p>
                    ${todoValue} 
                    <button id = "deleteBT">
                        delete 
                    </button> 
                </p>`
                
    todoHTML += html;
    
    for(let i = 0; i < todoArray.length; i++){
        
        todoRender.innerHTML = todoHTML;
    };
    
    console.log(todoArray);
})


deleteBT.addEventListener('click', function(){
    for(let i = 0; i < todoArray.length; i++){

        todoArray.splice(i, 1);
    }
})
