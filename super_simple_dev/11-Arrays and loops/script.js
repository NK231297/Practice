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

/*
let index = 1;

while(index <= 5){
    console.log(index);
    index++;
}
*/
/*
const list = [
    'Make dinner.',
    'Wash dishes', 
    'Watch youtube.'
];

console.log(list.length);

for(let i = 0; i < list.length; i++){
    let listItem = list[i];
    console.log(i);
}
*/
/*
const array1 = [1, 1, 3];

let total = 0;

for(let i = 0; i < array1.length; i++){
    let num = array1[i];

    total = total + num;
}

console.log(total);
*/

const array1 = [1, 1, 3];

let array2 = [];

for(let i = 0; i < array1.length; i++){
    let abc = array1[i];

    let bcd = array1[i] += array1[i];

    array2.push(bcd);
}

console.log(array2);