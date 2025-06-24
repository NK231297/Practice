let a = () => {
    alert("hello")
}

let b = () => {
    alert("hello2")
}

document.getElementById("b1").addEventListener( `click`, a )

document.getElementById("b1").addEventListener( `click`, b )

let c = prompt("click number 1 or 2 to stop alert function associated with that number.")

if ( c == "1" ) {
    document.getElementById("b1").removeEventListener( `click`, a )
}
if ( c == "2" ) {
    document.getElementById("b1").removeEventListener( `click`, b )
}

if ( c != "1" && c != "2") {
    alert("you entered wrong input")
}


