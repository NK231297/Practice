const a =()=>{
    let a1 = document.createElement("div")
    let a2 = document.createElement("div")
    let a3 = document.createElement("div")
    let a4 = document.createElement("div")
    document.body.append(a1, a2, a3, a4)
}

a()

const b =()=>{

    document.body.getElementsByTagName("div")[0].style.height = "50px";
    document.body.getElementsByTagName("div")[0].style.width = "50px";
    document.body.getElementsByTagName("div")[0].style.backgroundColor = "red";
}
const c =()=>{
    document.body.getElementsByTagName("div")[1].style.height = "50px";
    document.body.getElementsByTagName("div")[1].style.width = "50px";
    document.body.getElementsByTagName("div")[1].style.backgroundColor = "green";
}
const d =()=>{
    document.body.getElementsByTagName("div")[2].style.height = "50px";
    document.body.getElementsByTagName("div")[2].style.width = "50px";
    document.body.getElementsByTagName("div")[2].style.backgroundColor = "blue";
}
const e =()=>{
    document.body.getElementsByTagName("div")[3].style.height = "50px";
    document.body.getElementsByTagName("div")[3].style.width = "50px";
    document.body.getElementsByTagName("div")[3].style.backgroundColor = "yellow";
}

b()
c()
d()
e()