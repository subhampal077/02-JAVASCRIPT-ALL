console.log("hello");

// Logical operator   -------------->>>>>>>>

var a = true;  var b = false ;

console.log( a || b );  // true ( OR operation)
console.log( a && b);   // false (AND operation)
console.log( a == b);   // false (EQUALITY operation)
console.log( a != b);   // True (non-equality operation)


// concatenation  ----------->>>>>>>>>

var word = "Hi";
var name = "Subham";
console.log(word + name); // HiSubham
console.log(word + " " + name);  //  Hi Subham
console.log( `${word} ${name}`);    //  Hi Subham


// Dynamic type conversion  ------------>>>>>>>>

var a = 5; // number
var b = "6"; // string

// a + b = "56" ---> here  a converted to string
// a * b = 30  ----> here b  converted to number
// a - b = -1;
// a / b = 0.83 


// var a = 5; var b = "hi";
// a + b = "5hi"
// a * b = NaN;
// a - b =  NaN;  // not a number
// a / b = NaN


// ESCAPE CHARACTER -------->>>>>>>

var word = "hi";
var name = "Subh";   // needed o/p =  hi"Subh
console.log( word + "\"" + name);  // o/p = hi"Subh
 
var sentence = "My name is \"Subham\" ";  
// The element after  \  will be ignored or escaped by the compiler
console.log(sentence);  // My name is "Subham"



// STRING LENGTH ----------->

var name = "You tube";
console.log( name.length ); //  o/p = 8
console.log(name[5]);  // o/p = u
console.log(name[name.length - 1]);  // last INDEX - o/p = e


// STRING indexOf  ----------------->>>>>

var word = "hello world";
word.indexOf(" ");    // o/p = 5
word.indexOf("o");   // o/p = 4
word.indexOf("lo");   // o/p = 3


// STRING charAt  ------------->>>>>>>>>

var word = "hello world";
word.charAt(0);   // o/p =h
word.charAt(10);  // o/p = d
word.charAt(11);  // o/p = undefined

