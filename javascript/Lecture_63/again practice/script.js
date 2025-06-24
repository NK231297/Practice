//Question no. 1
/*
const loadScript = (src)=>{
    let p1 = new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.src = src
        document.body.append(script)
        
        script.onload = ()=>{
            resolve("Done hai ji.")
        }

        script.onerror = ()=>{
            reject(new Error("nahi hua ji"))
        }

    })
    return p1
}

let l1 = loadScript("e1xtra.js")

l1
.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error.message)
})
*/

//Question no. 2
/*
const loadScript = async(src)=>{

    let p1 = new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.src = src
        document.body.append(script)
    
        script.onload = ()=>{
            resolve("complete " + src)
        }

        script.onerror = ()=>{
            reject( new Error("Something went wrong") )
        }

    })
    return p1
}

const a = async()=>{

    let l1 = await loadScript("extra.js")
    console.log(l1)

}

a()
*/

//Question no. 3
/*
const a = ()=>{
    let p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("hello ji")
        }, 3000)
    })
return p1
}

const b = async()=>{

    try{
        let a1 = await a()
        console.log(a1)

    }
    catch(error){
        console.log(error)
    }


}

b()
*/

//Question no. 4

const a = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10)
        }, 3000)
    })
}
const b = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(20)
        }, 5000)
    })
}
const c = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(30)
        }, 8000)
    })
}

const run = async()=>{
    console.time("run")
    let a1 =  a()
    let a2 =  b()
    let a3 =  c()

    let hi = await Promise.all([a1, a2, a3])
    console.log(hi)

    console.timeEnd("run")
}

run()