//loadScript using promises

const loadScript = (src)=>{
    let p1 = new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.src = src
        document.body.append(script)

        script.onload = ()=>{
            resolve(1)
        }

        script.onerror = ()=>{
            reject(0)
        }

    })
    return p1
}

let p1 = loadScript("extra.js")

p1
.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log("First script failed to load")
    let p2 = loadScript("extra2.js")
    p2
    .then(()=>{
        console.log("First script failed | Second script load")
    })
    .catch((error)=>{
        console.log("second script also failed lol")
    })
})