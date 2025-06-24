const ab = ()=>{
    let a = fetch("https://goweather.xyz/weather/Delhi")
    a
    .then((value1)=>{
        return value1.json()
    })
    .then((value2)=>{
        console.log(value2)
    })
}

const ab1 = ()=>{
    let b = fetch("https://goweather.xyz/weather/Mumbai")
    b
    .then((value1)=>{
        return value1.json()
    })
    .then((value2)=>{
        console.log(value2)
    })
}

const ab2 = ()=>{
    let c = fetch("https://goweather.xyz/weather/Gujarat")
    c
    .then((value1)=>{
        return value1.json()
    })
    .then((value2)=>{
        console.log(value2)
    })
}

const ac = async()=>{
    let a1 = await ab()
    let a2 = await ab1()
    let a3 = await ab2()
    console.log(a1, a2, a3)
}

ac()



