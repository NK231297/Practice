let p1 = new Promise((resolve, reject)=>{
    alert("hey i am not resolved yet")

    setTimeout(()=>{
        resolve(1)
    }, 2000)

})

p1.then(()=>{
    console.log("hey i am resolved")

    let p2 = new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve(5)
        }, 6000)

    }).then((value)=>{
        console.log(value)
    })


    let p3 = new Promise((resolve, reject)=>{
        resolve("hello i am resolved text of promise no. 3")
    }).then((value)=>{
        console.log(value)
    })
})

p1.then((value)=>{
    console.log(value) 
})