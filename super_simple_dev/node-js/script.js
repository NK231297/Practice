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
/*
const nums = [20, 56, 50, 45, 65, 44, 38, 76, 58];

const nums2 = [];

nums.forEach((num)=>{
    if(num > 50){
        nums2.push(num);
    }
});

console.log(nums2);
*/
/*
const nums = [5, 15, 20, 8];

const greaterT10 = nums.filter((num)=>{
    return num > 10;
});

console.log(greaterT10);
*/
/*
const data = [
    {name: 'Nikhil', age: 16},
    {name: 'Mohit', age: 17},
    {name: 'Arav', age: 19},
    {name: 'Mohammad', age: 21},
    {name: 'Salma', age: 15},
    {name: 'Binod', age: 38}
];

const above18 = data.filter((person)=>{
    return person.age > 18;
});

console.log(above18);
*/
/*
const products = [
    {name: 'TV', inStock: true},
    {name: 'Mobile', inStock: true},
    {name: 'Fridge', inStock: false},
    {name: 'Washing Machine', inStock: true},
    {name: 'Hair dryer', inStock: false},
    {name: 'Laptop', inStock: true},
    {name: 'Trimmer', inStock: false}
];

const availableProducts = products.filter((product)=>product.inStock === true);

console.log(availableProducts);
*/
/*
const nums = [10, 20, 30, 40];

const find = nums.find((num)=>{
    return num === 30;
});

console.log(find);
*/
/*
const people = [
  { name: "Aarav", age: 25 },
  { name: "Vihaan", age: 28 },
  { name: "Ishaan", age: 22 },
  { name: "Kabir", age: 30 },
  { name: "Advait", age: 27 },
  { name: "Aryan", age: 24 },
  { name: "Reyansh", age: 26 },
  { name: "Krish", age: 29 },
  { name: "Daksh", age: 21 },
  { name: "Ayaan", age: 23 },
  { name: "Rohan", age: 30 },
  { name: "Vivaan", age: 25 },
  { name: "Aditya", age: 27 },
  { name: "Manav", age: 20 },
  { name: "Rudra", age: 22 },
  { name: "Arjun", age: 26 },
  { name: "Kiaan", age: 28 },
  { name: "Shaurya", age: 29 },
  { name: "Parth", age: 21 },
  { name: "Laksh", age: 24 },
  { name: "Om", age: 23 },
  { name: "Dev", age: 25 },
  { name: "Rishabh", age: 27 },
  { name: "Yash", age: 22 },
  { name: "Nirav", age: 30 }
];

const personAge25 = people.find((person)=>{
    return person.age === 25;
});

console.log(personAge25);
*/
/*
const products = [
  { name: "Mechanical Keyboard", price: 3000 },
  { name: "Gaming Mouse", price: 2000 },
  { name: "USB-C Hub", price: 1000 },
  { name: "External Hard Drive", price: 5000 },
  { name: "Webcam", price: 4000 },
  { name: "RGB Mouse Pad", price: 2000 },
  { name: "Wireless Headset", price: 5000 },
  { name: "Laptop Stand", price: 3000 },
  { name: "Cooling Pad", price: 2000 },
  { name: "HDMI Cable", price: 1000 },
  { name: "Bluetooth Speaker", price: 4000 },
  { name: "USB Flash Drive", price: 1000 },
  { name: "Gaming Chair", price: 5000 },
  { name: "Monitor Stand", price: 2000 },
  { name: "Ethernet Cable", price: 1000 },
  { name: "Power Bank", price: 3000 },
  { name: "Wireless Keyboard", price: 4000 },
  { name: "Desk Lamp", price: 2000 },
  { name: "Graphics Tablet", price: 5000 },
  { name: "Portable SSD", price: 4000 },
  { name: "VR Headset", price: 5000 },
  { name: "Microphone", price: 3000 },
  { name: "Mouse Bungee", price: 1000 },
  { name: "USB Hub", price: 2000 },
  { name: "Headphone Stand", price: 1000 }
];

const prodWithPrice1000 = products.find((product)=>{
    return product.price === 1000;
});

console.log(prodWithPrice1000);
*/
/*
const nums = [1, 3, 5, 7, 8];

const evenNum = nums.some((num)=>{
    return num % 2 === 0;
});

console.log(evenNum);
*/
/*
const students = [
    { name: "Om", isPass: false },
    { name: "Dev", isPass: false },
    { name: "Rishabh", isPass: false },
    { name: "Yash", isPass: false },
    { name: "Nirav", isPass: false }
];

const passed = students.some((student)=>{
    return student.isPass === true;
});

console.log(passed);
*/
/*
const products = [
    { name: "VR Headset", stock: 0 },
    { name: "Microphone", stock: 0 },
    { name: "Mouse Bungee", stock: 0 },
    { name: "USB Hub", stock: 0 },
    { name: "Headphone Stand", stock: 0 }
];

const available = products.some((product)=>{
    return product.stock > 0;
});

console.log(available);
*/
/*
const nums = [1, 2, 3, 4];

const isPositive = nums.every((num)=>{
    return num > 0;
});

console.log(isPositive);
*/
/*
const persons = [
  { name: "Om", age: 23 },
  { name: "Dev", age: 25 },
  { name: "Rishabh", age: 18 },
  { name: "Yash", age: 22 },
  { name: "Nirav", age: 30 }
];

const isAdult = persons.every((person)=>{
    return person.age >= 18;
});

console.log(isAdult);
*/
/*
const products = [
  { name: "VR Headset", price: 5000 },
  { name: "Microphone", price: 5000 },
  { name: "Mouse Bungee", price: 5000 },
  { name: "USB Hub", price: 2000 },
  { name: "Headphone Stand", price: 5000 }
];

const priceAvailable = products.every((product)=>{
    return product.price;
});

console.log(priceAvailable);
*/
/*
const nums = [1, 2, 3, 4, 5];

const initialValue = 0;

const sum = nums.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue},
initialValue);

console.log(sum);
*/
/*
const products = [
  { name: "VR Headset", price: 5000 },
  { name: "Microphone", price: 5000 },
  { name: "Mouse Bungee", price: 5000 },
  { name: "USB Hub", price: 2000 },
  { name: "Headphone Stand", price: 5000 }
];

const initialValue = 0;

const totalPrice = products.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue.price;
}, initialValue);

console.log(totalPrice);
*/

const fruits = ['apple', 'banana', 'guava', 'apple', 'guava', 'guava'];

const result = fruits.reduce((accumulator, item)=>{
    if(accumulator[])
}, {})

//Hello0