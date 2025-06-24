/*

let a = [1, 2, 3, 4, 5];

console.log(a, typeof a);
// console.log( typeof a );

let b = a.toString();

console.log(b, typeof b);
// console.log( typeof b )

let c = a.join("-");

console.log(c, typeof c);

let d = a.pop();

console.log(a, typeof a, d, typeof d);

let e = a.push("hello");

console.log(a)

*/

let f = [1, 2, 3, 4, 5, 6, 7, 8];

let g = f.shift();

console.log(g);

let h = [10, 20, 30, 40, 50, 60, 70, 80];

let i = h.unshift(90);

console.log(i)
console.log(h)

let j = [101, 102, 103, 104, 105, 106, 107, 108];

let k = delete j[0];

console.log(k);
console.log(j);

let l = [1, 2, 3, 4];
let m = [5, 6, 7, 8];
let n = [9, 10, 11, 12];

let o = l.concat(m, n);

console.log(o);


let p = [54, 83, 78, 22, 68, 29];

p.sort();

console.log(p);

