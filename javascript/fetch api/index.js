/*
let a = async()=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')

    let data = await response.json()

    console.log(data)
}

a()
*/

//creating function which will contains user data and post requests

const postData = async()=>{

    let userData = {
        username: "nk231297",
        name: "Nikhil Kumar",
        email: "nk231297@gmail.com",
        userID: "111"

    }

    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    let data = await response.json();

    console.log(data);

};

postData();

