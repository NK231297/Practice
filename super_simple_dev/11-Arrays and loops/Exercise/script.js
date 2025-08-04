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

function function4(arr, num){
    let arr2 = [];

    for(let i = 0; i < arr.length; i++){
        arr2.push(arr[i] + num);
    }

    return arr2;
};

function function5(arr1, arr2){
    const arr3 = [];

    for(let i = 0; i < arr1.length; i++){
        arr3.push(arr1[i] + arr2[i]);
    }

    return arr3;
}

function function6(arr){
    let positiveValues = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positiveValues++;
        }
    }
    return positiveValues;
}

function function7(arr){
    let smallest = arr[0];
    let biggest = arr[0];
    
    if(arr.length === 0){
        return null;
    }
    else if(arr.length === 1){
        console.log(`Smallest: ${smallest}`, `Biggest: ${biggest}`)
    }
    else{
    for(let i = 0; i < arr.length; i++){
        let arrItem = arr[i]
        if(smallest > arrItem){
            smallest = arrItem;
        }
        else if(biggest < arrItem){
            biggest = arrItem;
        }
    }

    console.log(`Smallest: ${smallest}`, `Biggest: ${biggest}` );
    }
}

function function8(arr){
    const result = {};

    for(let i = 0; i < arr.length; i++){
        let word = arr[i];

        if(result[word]){
            result[word] += 1;
        }
        else{
            result[word] = 1
        }
    };
    return result;
};

function doubleArray(arr){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] * 2)
    }
    return result;
};
/*
for(let i = 0; i <= 10; i++){
    
    if(i % 3 === 1){
        continue;
    }

    console.log(i);
};
*/

/*
const array1 = ['search','hello', 'world', 'good'];

let result = 0;

for(let i = 0; i < array1.length; i++){
    
    if(array1[i] === 'search'){
        result = i;
        console.log(result);
        break;
    }

}
*/

function findIndex(arr, word){
    let index = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === word){
            index = i;
            return index;
            
        }
    }
}

