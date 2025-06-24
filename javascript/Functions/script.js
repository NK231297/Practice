//Easy 1
/*
const greet = (name)=>{
    console.log( "Hello " + name + "!" );
};

greet("Nikhil");
*/

//Easy 2
/*
const add = (a, b)=>{
    return a+b;
}

console.log( "Sum is: ",  add(4, 5))
console.log( "Sum is: ",  add(7, 5))
console.log( "Sum is: ",  add(16, 5))
*/

//Easy 3
/*
const area = (length, width)=>{
    return length * width;
}


console.log( "Area is: ", area(5, 16) );
console.log( "Area is: ", area(76, 83) );
*/

//Medium 1

/*
const checkEvenOdd = (num)=>{
    if (num % 2 === 0) {
        console.log("Even")
    }
    else{
        console.log("Odd")
    };
};

checkEvenOdd(32266);
*/

//Medium 2
/*
const countLetter = (word, letter)=>{
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] === letter){
            count++;
        }
    }
    console.log(` The letter: "${letter}" appears " ${count} " times in word ${word} `);
};

countLetter("kya le meli nakal kalta hai ?", "l");
*/

//Medium 3
/*
const bigDigit = (arr)=>{
    let max = arr[0];
    for( let i = 0; i < arr.length; i++ ){
        if( arr[i] > max ){
            max = arr[i]
        }
    }
    console.log(` "${max}" is the biggest number of array `)
}

bigDigit([4, 6, 9, 13, 15, 7, 2]);

const smallDigit = (arr)=>{
    let small = arr[0];
    for( let i = 0; i < arr.length; i++ ){
        if( arr[i] < small ){
            small = arr[i]
        }
    }
    console.log(` "${small}" is the smallest number of array `)
}

smallDigit([4, 6, 9, 13, 15, 7, 2]);
*/

//Medium 4
/*
const averageFinder = (arr)=>{
    let total = 0;
    let totalElements = 0;

    for( let i = 0; i < arr.length; i++ ){
        total = total + arr[i];
        totalElements = arr.length;
    }
    
    console.log( total / totalElements )
}

averageFinder([23, 44, 63, 14, 32, 10, 11, 22, 45, 66]);
*/

//Medium 5
/*
const countVowel = (word)=>{
    let count = 0;
    for( let i = 0; i < word.length; i++ ){
        if( "a" === word[i] || "e" === word[i] || "i" === word[i] || "o" === word[i] || "u" === word[i]){
            count++
            
        }
    }
    console.log(` In text "${word}" there is "${count}" no. of vowels available. `);
};

countVowel("mera naam hai bulla rakhta hu khulla");
*/

//Medium 6

const reverseTheWord = (word)=>{
    for( let i = 0; i < word.length; i++ ){
        word[i]
    }
}