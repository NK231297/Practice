let a = prompt("Enter input")

let b = prompt("input input")

document.cookie = ` ${ encodeURIComponent(a) } = ${ encodeURIComponent(b) } `



console.log(document.cookie)