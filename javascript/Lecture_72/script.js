const contentBox = document.getElementById("content_box");

const addButton = document.getElementById("add");

const deleteButton = document.getElementById("dl");


const showNotesOnUi = ()=>{

    

    for (let i = 0; i < localStorage.length; i++) {
        
        let noteBox = document.createElement("div");

        noteBox.className = "hello";

        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        noteBox.innerHTML = `<h3> ${key} </h3> <br/> <p> ${value} </p>`;

        contentBox.appendChild(noteBox);

    }
}

const createNote = ()=>{
    addButton.addEventListener( "click", ()=>{
        let key = prompt("Input Heading");

        let value = prompt("Input Note");

        localStorage.setItem(key, value);



    } )
}

const deleteNote = ()=>{
    deleteButton.addEventListener("click", ()=>{
        let key = prompt("input key of that note that you want to delete");

        localStorage.removeItem(key);
    })
}

showNotesOnUi();
createNote();
deleteNote();