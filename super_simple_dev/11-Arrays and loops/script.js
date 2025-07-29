const toDoInput = document.querySelector('#toDoList');
const addToDo = document.querySelector('#addToDo');

let toDoArray = [];

function function1(){
    let inputValue = toDoInput.value;

    toDoArray.push(inputValue);

    console.log(toDoArray);

    toDoInput.value = '';
}

addToDo.addEventListener('click', function(){
    function1();
})