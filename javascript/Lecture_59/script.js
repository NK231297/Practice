const a = async()=>{

    let p1 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("Hello i am p1")
    }, 3000)
    
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hello i am p2")
    }, 5000)

})

console.log("Waiting for p1...")
let a1 = await p1
console.log("p1 is fetched " + a1)
console.log("Waiting for p2")
let a2 = await p2
console.log("p2 is fetched " + a2)


}

a()