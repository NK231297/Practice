const b =()=>{
    let b1 = document.createElement("div")
    document.body.append(b1)
    b1.innerText = 2
    document.body.getElementsByTagName("div")[0].style.cssText = "font-size: 4rem; height: 200px; width: 200px; background-color: lightblue; display: flex; justify-content: center; align-items: center;"
}

b()