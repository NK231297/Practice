const function2 = function(){
    console.log("apple")
}

const object1 = {
    num: 2,
    func: function(){
        console.log('Banana');
    }
}
/*
function run(param){
    param()
    console.log(typeof param);
}

run(function(){
    console.log('Hello world!')
})
*/

function function1(){
    console.log('setTimeOut');
}

setTimeout(function(){
    console.log('setTimeOut')
}, 3000);
/*
setInterval(function(){
    console.log('setInterval')
}, 1000)
*/