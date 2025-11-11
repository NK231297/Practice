/*
const num = [1, 2, 3, 4, 5];

const doubled = num.map((i)=>{
    return `${i}`;
});

console.log(doubled);
*/
/*
const data = [
    {name: 'Nikhil', age: 24},
    {name: 'Irfan', age: 25},
    {name: 'Nitin', age: 25.5},
    {name: 'Sanskar', age: 23},
    {name: 'Mohit', age: 22},
    {name: 'Kartik', age: 21}
];

const names = data.map((i)=>{
    return i.name;
});

console.log(names);
*/
/*
const nums = [10, 20, 30, 40, 50];

nums.forEach((num)=>{
    console.log(num);
});
*/
/*
const items = [
    'item-10',
    'item-20',
    'item-30',
    'item-40',
    'item-50'
];

items.forEach((i)=>{
    console.log(i, `Index: ${items.indexOf(i)}`);
});
*/

const nums = [20, 56, 50, 45, 65, 44, 38, 76, 58];

const nums2 = [];

nums.forEach((num)=>{
    if(num > 50){
        nums2.push(num);
    }
});

console.log(nums2);