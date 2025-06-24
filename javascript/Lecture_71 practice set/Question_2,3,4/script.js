let key = prompt("Enter your Heading for your note.");

let value = prompt("Write your note here.");

if(value){
    localStorage.setItem(key, value);
};

let deleteButton = document.getElementById("deletebt");

deleteButton.addEventListener( "click", ()=>{
    let dl = prompt("dl");

    localStorage.removeItem(dl);
} )