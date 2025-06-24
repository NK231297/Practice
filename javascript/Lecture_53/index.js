// const loadTag =(txt)=>{
//     let p = document.createElement("p")
//     p.innerText = txt








//     document.body.append(p)

// }

const a = (callback)=>{
    console.log("hello1")
    callback()
}

const b = (callback)=>{
    console.log("hello2")
    callback()
}

const c = (callback)=>{
    console.log("hello3")
    callback()
}
const d = (callback)=>{
    console.log("hello4")
    callback()
}
const e = (callback)=>{
    console.log("hello5")
    callback()
}
const f = (callback)=>{
    console.log("hello6")
    callback()
}
const g = (callback)=>{
    console.log("hello7")
    // callback()
}

a(
    ()=>{
        b(
            ()=>{
                c(
                    ()=>{
                        d(
                            ()=>{
                                e(
                                    ()=>{
                                        f(
                                            ()=>{
                                                g()
                                            }
                                        )
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
)


