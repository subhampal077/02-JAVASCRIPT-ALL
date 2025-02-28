// Call stack in js


// call stack annonymus means program is in global execution context
// in call stack last in  first out procedure works (and out stacks deleted permanently)


debugger

function introduceMe() {
    console.log("I am subham");
    introduceMe();
};

introduceMe();

console.log("Completed");


// When we run this function after printing 10000 plus times in colsole it stop printing because of  Maximum call stack size exceeded. And that is called STACK OVERFLOW