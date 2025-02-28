
// Difference between Methods and Functions in JavaScript |

// Every method is a function But every function is NOT a method. 

// A method in JavaScript is a function that is associated with an object.


const maths = {             // its a method
    E: 2.718281828459045,
    add: function (a, b) {
        return a + b;
    },
    square: function (a) {
        return a ** 2;
    },
    
    subtract(a, b) {        // ES6 feature
        return a - b;
    },
    cube(num) {
        return num ** 3;
    }
};


// function add(a , b) {    // its a function, not a method
//     return a + b;
// };

