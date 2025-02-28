
// GLOBAL AND LOCAL SCOPE IN JS

// debugger
const userName = "Subham";
let userAge = 25;
var a = 50;

function add() {
    const x = 5;
    var y = 10;
    console.log(x + y);
    console.log(userName);
};

function subtract() {
    const userName = "Akash";
    const x = 15;
    var y = 12;
    console.log(x - y);
    console.log(userName);
};

// console.log(y);  // y is not defined

add();
subtract();

console.log(userName);

console.log("Program ended!!");


//complete //  next block and module scope


