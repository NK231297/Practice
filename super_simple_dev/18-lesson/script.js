function oldType(){
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', ()=>{
        console.log(xhr.response);
    })

    xhr.open('GET', 'https://supersimplebackend.dev/greeting');
    xhr.send();


};

async function newType(){
    const response = await fetch('https://supersimplebackend.dev/greeting');

    const data = await response.text();

    console.log(data);
};

oldType();
newType();

async function nowPost(){
    const response = await fetch('https://supersimplebackend.dev/greeting', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Nikhil'
        })
    })

    const data = await response.text();

    console.log(data);
};

// nowPost();

//get request on amazone

async function getAmazon(){
    try{
        await fetch('https://amazon.com');
    
        // const data = await response.json();
    
        // console.log(data);
    }
    catch(error){
        console.log('Your request was blocked by the backend');
    }
};

// getAmazon();

async function emptyPost(){
    try{
        const response = await fetch('https://supersimplebackend.dev/greeting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        if(response.status >= 400){
            throw response;
        }
    
        const text = await response.text();
    
        console.log(text);
    }
    catch(error){
        if(error.status === 400){
            const errorMessage = await error.json();

            console.log(errorMessage);
        }
        else{
            console.log('Network error. Please try again later.');
        }
    }
};

emptyPost();