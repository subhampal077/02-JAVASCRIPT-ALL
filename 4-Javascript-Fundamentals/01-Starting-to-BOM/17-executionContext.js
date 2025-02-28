
// EXECUTION CONTEXT 

// Memory allocation phase and code execution phase both are combined call execution context or Global execution context

debugger

sayhi();    // WE can call a function before initialisation coz function has global scope/ global execution context and in memory allocation phase function store the full function value.

const userName = "Subham";  // Undefined in memory allocation

const userAge = 25;   // O/P Undefined in memory allocation

//Function execution --

//  But Function In memory allocation phase -(it will store the wihole function code) O/P = function sayhi() { console.log("Hi"); }

function sayhi() {

    const a = 10;
    console.log(a);
    

    addTwoNumber(4,8);

};
// sayhi();

// AFter completing of FUNCTION's execution the local execution context of function will deleted.

// addTwoNumber(4,8);

function addTwoNumber(a1, b1) {
    return a1 + b1;
};

console.log("Program ended");

//////