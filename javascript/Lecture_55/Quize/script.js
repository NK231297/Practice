let p1 = new Promise ((resolve, reject)=>{
let script = document.createElement("script")
script.src = "extra.js"
document.body.append(script)
resolve(10) = "lello ji"
// reject( new Error("Error aa gaya rabba rabba") )
}

)
