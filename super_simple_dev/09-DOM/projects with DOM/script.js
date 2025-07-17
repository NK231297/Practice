const subscribe = document.querySelector('#subBT');

subscribe.addEventListener('click', function(e){
    e.preventDefault();

    if(subscribe.innerText === 'Subscribe'){
        subscribe.innerText = 'Subscribed'
    }
    else{
        subscribe.innerText = 'Subscribe'
    };
})