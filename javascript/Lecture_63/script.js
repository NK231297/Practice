//Question no. 1

//Using .then method

/* const loadscript =(src)=>{
    let p1 = new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.src = src
        document.body.append(script)

        script.onload=()=>{
            resolve("Script loaded succesfully")
        }

        script.onerror=()=>{
            reject("Script not loaded")
        }
        
    })


return(p1)
}

let l1 = loadscript("extra.js")

l1
.then((value)=>{
    alert(value)
})
.catch((error)=>{
    alert(error)
}) */


//Question no. 2

//Using Async / Await
/*
const loadscript = async (src)=>{
    
    let p1 = new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.src = src
        document.body.append(script)
        script.onload =()=>{
            resolve("Resolve value: script loaded")
        }

        script.onerror=()=>{
            reject("Reject value: script not loaded")
        }
    })
    return p1
}

const a = async ()=>{
    
    let b = await loadscript("1extra.js")
    console.log(b)
}

a()
*/

//Question no. 3
/*
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("you are rejected")
    }, 3000)
})

const b = async()=>{
    try{
        let l1 = await p1
        // console.log(l1)

    }
    catch(error){
        console.log(error)
    }
    
}

b()
*/
//Question no. 4

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(10)
    }, 2000)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20)
    }, 1000)
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30)
    }, 3000)
})

const run = async()=>{
    console.time("run")
    let a1 = p1
    let a2 = p2
    let a3 = p3
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3)
    console.timeEnd("run")
}

run()