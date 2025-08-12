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

addBT.addEventListener('click', function(){
    cartText.innerHTML = 
    `
    <p> Added to cart </p>
    `
    setTimeout(function(){
        cartText.innerHTML = '';
    }, 2000)
})