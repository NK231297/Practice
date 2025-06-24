let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(
        ()=>{
            // console.log("Promise is fulfilled")
            resolve(12)
            // reject(new Error("error occurd"))
        }, 3000
    );
}

)
let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(
        ()=>{
            // console.log("Promise is fulfilled")
            resolve(12)
            reject(new Error("error occurd"))
        }, 3000
    );
}

)

p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log("Error occurd in p2")
}

)