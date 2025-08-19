/*
const add = function(){
    console.log(2 + 3);
}


const runTwice = function(param){
    param();
    param();
};
*/

const bt = document.querySelector('.bt');
const addBT = document.querySelector('.add');

const cartText = document.querySelector('.cartText');


bt.addEventListener('click', ()=>{
    if(bt.innerText === 'Start'){
        bt.innerText = 'Loading...'

        setTimeout(()=>{
            bt.innerText = 'Finished!';
        }, 1000);
    }
    else if(bt.innerText === 'Finished!'){

        setTimeout(()=>{
            bt.innerText = 'Start'
        }, 1000);

    
    }        
    
})


let timeoutID;
addBT.addEventListener('click', ()=>{
    cartText.innerHTML = 
    `
    <p> Added to cart </p>
    `
    clearTimeout(timeoutID)
    timeoutID = setTimeout(()=>{
        cartText.innerHTML = '';
    }, 2000)
})
/*
const add = document.querySelector('.add');
const remove = document.querySelector('.remove');

let messages = 0;

add.addEventListener('click', function(){
    messages++;
    
})

remove.addEventListener('click', function(){
    if(!messages === 0){
        messages--;
    }
    
})



setInterval(function(){
    if(messages < 1){
        document.title = 'App'
    }
    else if(document.title === 'App'){
        document.title = `(${messages}) New messages`
    }
    else{
        document.title = 'App'
    }
}, 1000)

const oneParam = param =>{
    return param + 2;
}

const oneLine = () => 2 + 3;

const object1 = {
    method1: () =>{},
    
    method2(){}
}
*/

const multiply = (param1, param2)=>param1 * param2

const countPositive = (nums)=>{
    let positiveNum = 0;

    nums.forEach((num)=>{
        if(num > 0){
            positiveNum++;
        }

    })

    return positiveNum
}
// countPositive([1, -3, 5, -7, 9])

const addNum = (arr, num)=>{
    console.log(arr.map(value=>value + num));
}

const removeEgg = (arr)=>{
    let eggs = 0;
    return arr.filter((value, index)=>{
        if(eggs < 2 && value === 'eggs'){
            eggs++;
            return false
        }
        else{
            return true
        }
    })
}