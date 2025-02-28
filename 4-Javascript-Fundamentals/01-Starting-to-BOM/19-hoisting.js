
// HOISTING IN JAVASCRIPT

// When we try to access a variable before initialisation and it NOT throws any error that means that variable is HOISTED.

//When we creat a variable using const or let it also hoisted but we cant access it coz javascript put it in another zone. And thats called TEMPORAL DEAD ZONE.

// debugger
console.log(userName);  // O/P = undefined

var userName = "Subham";

// let / const = O/P =  Cannot access 'userName' before initialization

// console.log(userName);



// -------------------------------------- For function



hi();   // O/P = Hey buddy   // Functions and classes in javascript is always HOISTED properly


// It is called Function Declaration   // Function Definition
function hi() {
    console.log("Hey buddy");
};


// ------------------------------------------


// If we create function like this -->>  Means store the function in a variable then Hoisting willnot work


hello();    // O/P =  Cannot access 'hello' before initialization 

// ( while create a function using let/const function works like a variable )


const hello = function() {
    console.log("Hello bhai");
};


// --------------------------------


// when create a function using var --->>>

hello2();  // O/P = hello2 is not a function

// Its showing hello2 is not a function  coz when we create a function using var we can access var before initialization coz it will store undefined in memory allocation phase and undefined is not a FUNCTION  

// But in case of let and const we cant ACCESS it before initialization (*JS ES6 rules)


// It is called Function Expression   // Function Definition
var hello2 = function() {       // Anonymous Function
    console.log("Hello bhai");
};



// IIFE  // Anonymous Function

