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

const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');

function buttonOnOff(input){
    if(input === 1){
        if(!c1.classList.contains('isToggel1')){
            c1.classList.add('isToggel1')
            c2.classList.remove('isToggel2')
            c3.classList.remove('isToggel3')
        }
        else{
            c1.classList.remove('isToggel1');
        }
    }
    else if(input === 2){
        if(!c2.classList.contains('isToggel2')){
            c2.classList.add('isToggel2');
            c1.classList.remove('isToggel1');
            c3.classList.remove('isToggel3');
        }
        else{
            c2.classList.remove('isToggel2')
        };
    }
    else if(input === 3){
        if(!c3.classList.contains('isToggel3')){
            c3.classList.add('isToggel3')
            c1.classList.remove('isToggel1')
            c2.classList.remove('isToggel2')
        }
        else{
            c3.classList.remove('isToggel3')
        }
    }
    else{
        console.log(1);
    }
}


c1.addEventListener('click', function(){
    buttonOnOff(1);
});

c2.addEventListener('click', function(){
    buttonOnOff(2)
});

c3.addEventListener('click', function(){
    buttonOnOff(3);
});

const cost = document.querySelector('#cost');
const costSubmit = document.querySelector('#costSubmit');
const totalElement = document.querySelector('#total');

costSubmit.addEventListener('click', function(){
    
    if(+cost.value < 0){
        totalElement.innerText = 'Cost could not be below 1$'
        totalElement.style.color = 'red'
    }
    else if(cost.value < 40){
        let total = +cost.value + 10;
        totalElement.innerText = total;
    } 
    else{
        totalElement.innerText = cost.value;
    }
})