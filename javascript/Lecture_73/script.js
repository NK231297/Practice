let conten_box = document.getElementById("content_box");

let add_bt = document.getElementById("add_bt");

let remove_bt = document.getElementById("remove_bt");

const add_note = ()=>{

    

    add_bt.addEventListener("click", ()=>{
        
        let key = localStorage.key(i+1)

        let value = prompt("Please add your to do")

        localStorage.setItem(key, value)
    })


}

const show_on_UI = ()=>{

    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);
        
        let value = localStorage.getItem(key);
        
        let div = document.createElement("div");

        div.className = "content_item"
        
        div.innerHTML = ` <p> ${value} </p> `

        conten_box.appendChild(div)
        
    }

}



show_on_UI();
add_note();