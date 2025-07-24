const amazone = document.querySelector('#amazon');

amazone.addEventListener('click', function(){
    // e.preventDefault();

    if(amazone.innerText === 'Add to cart'){
        amazone.innerText = 'Added';
        document.getElementById('amazon').style.backgroundColor = '#41f115a4'
    }
    else{
        amazone.innerText = 'Add to cart'
        document.getElementById('amazon').style.backgroundColor = '#ffce12'

    };
})

const uber1 = document.getElementById('uberBT1');
const uber2 = document.getElementById('uberBT2');

uber1.addEventListener('click', function(){
    if(uber1.innerText === 'Request Now'){
        uber1.innerText = 'Please wait.';
        uber1.style.backgroundColor = '#dadadaab'
        uber1.style.color = '#3f3f3fef'

    }
    else{
        uber1.innerText = 'Request Now';
        uber1.style.backgroundColor = 'black'
        uber1.style.color = 'white'
    };
})

uber2.addEventListener('click', function(){
    if(uber2.innerText === 'Schedule for later'){
        uber2.innerText = 'Please wait.'
        // uber1.style.backgroundColor = '#dadadaab'
        uber2.style.border = '2px solid #3f3f3fef'
        uber2.style.color = '#3f3f3fef'
        
    }
    else{
        uber2.innerText = 'Schedule for later'
        uber2.style.backgroundColor = 'rgb(230, 230, 230)'
        // uber1.style.border = '2px solid #3f3f3fef'
        uber2.style.color = 'black'
        uber2.style.border = 'none'
    }
    
})


const gaming = document.querySelector('.jsButton');

gaming.addEventListener('click', function(){
    
})