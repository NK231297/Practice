try{
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age>150){
    throw new Error("Invalid age")
    // console.log(age)
    }
    
}
catch(error){
    console.log(error.message)
    // console.log(age)
    console.log(error.name)
    console.log(error.stack)
}

console.log("hello")