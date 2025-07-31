/*
const array1 = [10, 20, 30];

console.log(array1);

array1[2] = 99;

console.log(array1);
*/
function function1(arr){
    let i = arr.length -1;
    let item = arr[i];
    console.log(item);
}

function function2(arr){
    let firstItem = arr[0];
    let lastIndex = arr.length - 1;
    let lastItem = arr[lastIndex];


    arr[0] = lastItem;
    arr[lastIndex] = firstItem;

    return arr;
}

/*
for(let i = 0; i <= 10; i += 2 ){
    console.log(i);
}

for(let i = 5; i >= 0; i--){
    console.log(i);
}
*/
/*
let i = 0;

while(i <= 10){
    console.log(i);
    i += 2;
}
*/
/*
let i = 5;

while(i >= 0){
    console.log(i);
    i--;
};
*/
/*
const arr1 = [23, 56, 16];

const arr2 = [];

for(let i = 0; i < arr1.length; i++){
    arr2.push(arr1[i] * 2);
};

console.log(arr2);
*/

function function3(arr){
    const arr2 = [];

    for(let i = 0; i < arr.length; i++){
        arr2.push(arr[i] + 1);
    }
    return arr2;
}