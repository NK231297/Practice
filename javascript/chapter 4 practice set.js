//Question No. 1

console.log("har\"".length)

//Question No. 2

const sentence = "The quick brown jumps over the lazy dog.";

const word = "fox";

console.log( ` The word "${word}" ${sentence.includes( word ) ? "is" : "is not"} in the sentence.` )

console.log( ` The sentence ${ sentence.endsWith("dog.", 3) ? "ends" : "not ends" } with dog. ` )

//Quesion no. 3

let a = "MY NAME IS ANTHONY GOLSALWIS";

console.log( a.toLowerCase() )

let str2 = "Please give Rs 1000";

let amount =  Number.parseInt(str2.slice( 15 ));

console.log(amount)
console.log(typeof amount)

let sentence_2 = "The quick brown fox jumps over the lazy dog.";

// let ra = sentence_2.replace( "fox", "cat" )

console.log( sentence_2.replace( "f", "t" ) )