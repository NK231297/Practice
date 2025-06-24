//array loops

// array for loop

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for ( i=0; i<a.length; i++ ) {
    console.log( a[i] )
};

console.log(a[9])

// for each loop
a.forEach(( element )=>{
    console.log( element*element )
}  )

// for-of loop
for( let i of a ){
    console.log(i)
}

// for-in loop
for( let i in a ){
    console.log(i)
}