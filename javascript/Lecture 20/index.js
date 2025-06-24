/*
let arr = [45, 23, 21];

arr.map((value)=>{
    console.log(value)
})
*/

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

a.map(( value )=>{
console.log(value * value)
}
)

let b =  a.filter((a) =>{
    return a<5
}

)

console.log(b)

const reduce_function = (h1, h2) => {
    return h1 + h2
}

let c = a.reduce( reduce_function )
console.log(c)
