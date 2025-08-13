/*
const add = function(){
    console.log(2 + 3);
}


const runTwice = function(param){
    param();
    param();
};


const bt = document.querySelector('.bt');
const addBT = document.querySelector('.add');
const cartText = document.querySelector('.cartText');



bt.addEventListener('click', function(){
    if(bt.innerText === 'Start'){
        bt.innerText = 'Loading...'

        setTimeout(function(){
            bt.innerText = 'Finished!';
        }, 1000);
    }
    else if(bt.innerText === 'Finished!'){

        setTimeout(function(){
            bt.innerText = 'Start'
        }, 1000);

    
    }        
    
})


let timeoutID;
addBT.addEventListener('click', function(){
    cartText.innerHTML = 
    `
    <p> Added to cart </p>
    `
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function(){
        cartText.innerHTML = '';
    }, 2000)
})
*/
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
