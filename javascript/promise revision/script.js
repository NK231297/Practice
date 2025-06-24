const loadscript =(src)=>{

    let a = new Promise((resolve, reject)=>{
        let script = document.createElement("script")
        script.src = src
        document.body.append(script)
        
        script.onload = ()=>{
            resolve(100)
        }

        script.onerror = ()=>{
            reject(404)
        }


    })
    .then(()=>{
        setTimeout(()=>{
            console.log("Checking...")
        }, 1000)

        setTimeout(()=>{
            console.log("First script loaded successsfully with src " + src)
        }, 3000)
    })
    .catch((error)=>{
        console.log("Script not loaded error aa gaya")
    })

}

loadscript("extra1.js")