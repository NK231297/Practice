const a =()=>{
    let a1 = document.createElement("div")
    document.body.append(a1)
    a1.innerText = 1
    
    document.body.getElementsByTagName("div")[0].style.cssText = "font-size: 4rem; height: 200px; width: 200px; background-color: lightgreen; display: flex; justify-content: center; align-items: center;"
}


a()