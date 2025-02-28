
//  LEXICAL SCOPE OF VARIABLE WITHOUT VAR/LET/CONST

// IF WE USE STRICT MODE THEN THE FOLLOWING NO NAME VARIABLE WILL NOT WORK  give an error as x is not defined


// 'use strict';

console.log("Program Started");

function abc() {
    var a = 10;
    let b = 20;
    const c = 30;
    
    function xyz() {
        
        console.log("xyz func working");
        {
            x = 100;
            // const y = 200;
            var z = 300;
        }

        // console.log(y);  // y is not defined

        console.log(z);  // 300
        console.log(x);  //100

    };

    console.log("Hi");    // Hi

    xyz();

    console.log(x);   //    100

};

// console.log(x);   // x is not defined

abc();

console.log(x);   // 100 

console.log("Program Ended")

