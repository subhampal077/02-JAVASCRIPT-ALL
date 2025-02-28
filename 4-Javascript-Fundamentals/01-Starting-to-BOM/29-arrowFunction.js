
// Arrow Functions in JavaScript | ES6 |


//Function Declaration

// function square(num) {
//     return num ** 2;
// };



//Function Expression

// const square = function (num) {
//     return num ** 2;
// };



// Arrow function expression

const square = (num) => {
    return num * num;       // EXPLICIT RETURN
};
console.log(`The square val is = ${square(5)}`);   // 25

const add = (a, b) => a + b;   // IMPLICIT RETURN

const cube = a => a ** 3;


setTimeout(() => {       // Anonymous Arrow Func
    console.log("Hi after 2 sec");
}, 2000);

setTimeout(() => console.log("Hi after 4 sec")
    , 4000);

// A RANDOM Number FUNC between 1 to 10 

// const random = () => console.log("The Random val is = " + Math.floor( Math.random() * 10 + 1 ) );


const random = () => ( console.log("The Random val is = "
    +
    Math.floor(Math.random() * 10 + 1)) );  // We can rap this into a round braces while we write code in multiple lines. 

random();

