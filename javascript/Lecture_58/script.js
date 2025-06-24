let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
            reject(new Error("Error"))
        resolve("value 1")
    }, 1000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 2")
    }, 2000)
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    }, 3000)
})

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

// let allpromise = Promise.allSettled([p1, p2, p3])

// let allpromise = Promise.race([p1, p2, p3])
let allpromise = Promise.any([p1, p2, p3])

allpromise.then((value)=>{
    console.log(value)
})