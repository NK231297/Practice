import { priceFormat } from '../15-external libraries/checkout-project/scripts/utils/priceFormat.js';

//There are two types of test cases
// First is basic test - Which is test case #1, here we test that code is working or not
// Second is edge test case - Which is test case #2, 3, here we test our code with dificult tasks and check if our code han handle that or not.


//Test case #1
if(priceFormat(2045) === '20.45'){
    console.log('Passed');
} else{
    console.log('Failed');
}

//Test case #2
if(priceFormat(0) === '0.00'){
    console.log('Passed');
} else{
    console.log('Failed');
}

//Test case #3
if(priceFormat(2000.5) === '20.01'){
    console.log(priceFormat(2000.5));
    console.log('Passed');
}else {
    console.log(priceFormat(2000.5));
    console.log('Failed');
}

if(priceFormat(2000.4) === '20.00'){
    console.log('Passed');
} else {
    console.log('Failed');
}