let a = ()=>{
    alert("--------1--------")
} 

let b = ()=>{
    alert("-------2--------")
}

let c = ()=>{
    alert("--------3--------")
}

let d = ()=>{
    alert("--------4---------")
}

let e = ()=>{
    alert("--------5---------")
}


document.getElementById("b1").addEventListener( `click`, a )
document.getElementById("b2").addEventListener( `click`, b )
document.getElementById("b3").addEventListener( `click`, c )
document.getElementById("b4").addEventListener( `click`, d )
document.getElementById("b5").addEventListener( `click`, e )

let f = ()=>{
    window.location = "https://www.google.com"
}

let g = ()=>{
    window.location = "https://www.facebook.com"
}

let h = ()=>{
    window.location = "https://www.twitter.com"
}

let i = ()=>{
    window.location = "https://www.youtube.com"
}

let j = ()=>{
    window.location = "https://www.linkedin.com"
}

document.getElementById("b6").addEventListener( `click`, f )

document.getElementById("b7").addEventListener( `click`, g )

document.getElementById("b8").addEventListener( `click`, h )

document.getElementById("b9").addEventListener( `click`, i )

document.getElementById("b10").addEventListener( `click`, j )



// setInterval(() => {
//     document.getElementById("bulb").classList.toggle("bulb_on")
// }, 1000);

let k = ()=>{
    document.getElementById("bulb").classList.toggle("bulb_on")
}


document.getElementById("bulb").addEventListener( `mouseenter`, k)

