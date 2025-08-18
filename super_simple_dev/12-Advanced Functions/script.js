/*
const function2 = function(){
    console.log("apple")
}

const object1 = {
    num: 2,
    func: function(){
        console.log('Banana');
    }
}
*/
/*
function run(param){
    param()
    console.log(typeof param);
}

run(function(){
    console.log('Hello world!')
})
*/
/*
function function1(){
    console.log('setTimeOut');
}

setTimeout(function(){
    console.log('setTimeOut')
}, 3000);
*/
/*
setInterval(function(){
    console.log('setInterval')
}, 1000)
*/
/*
[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach(function(value, index){
    if(value === 'wash dishes'){
        return;
    }
    console.log(value, index);
})
*/

console.log([1, -3, 5].filter((value, index)=>{
    /*
    if(value >= 0){
        return true
    }
    */

    return value >= 0
}))

console.log([1, 1, 3].map(value=>value * 2));