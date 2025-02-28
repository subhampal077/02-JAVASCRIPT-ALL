
// Higher Order Functions and Callbacks in JavaScript

// When we pass a function as a PARAMETER into another function that another function is called HIGHER ORDER FUNCTION. Here a is a HIGHER ORDER function.

// And the function we pass as a parameter that is called CALLBACK FUNCTION. Here sayHi is a callback function.


function a( lol ) {   // Passing Argument as a PARAMETER named lol  ( lol = sayHi function itself)

    console.dir( lol );  //Print the function as an OBJRCT

    lol();
};

a(sayHi);   // Passing sayHi func as a ARGUMENT   // using hoisting concept

// CALLBACK FUNCTION
function sayHi() {
    console.log("Heyyyyyy");
};

// a(sayHi);


// OR WE CAN WRITE THE CODE LIKE THIS -->  // Called Anonymous function

a( function() {
    console.log("Heyyyyyy");
} );



// --------------------------------------------------- NOTES


// console.log(a);   // print as a full function code
// console.dir(a);   // Print as an OBJECT

//// Behind the scenes- function is an object

// a.userAge = 25;


// -----------