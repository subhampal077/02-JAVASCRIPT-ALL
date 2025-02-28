
// setTimeout and setInterval in JavaScript |


const timer0 = setTimeout(`console.log("hello after 0 sec");`, 0);

const timer1 = setTimeout(`console.log("hello after 3sec");`, 3000);
const timer2 = setTimeout("console.log('hello after 5sec')", 5000);

const timer3 = setTimeout(a, 6000);   // we dont need to call the function a()  // Higher Order FUNC

// const timer4 = setTimeout(a, 7000, "lolo", 45, [2, 4]); 


clearTimeout(timer2);     // timer2 will not print/run. rest of the code run


// SET TIMEOUT AS A HIGHER ORDER FUNCTION

function a() {
    // console.log(arguments);    // Not recomended to use
    console.log("Hello World 6 sec");
};

console.log("It will print at the top");

// IF we set the SET TIMEOut 0 sec and print something  and in global scope write a console.log something  then the global console.log something always print first and then set timeout wala consol.log will print.

// It happens coz normal codes in js like console.log() and any function we write all are SYNCHRONOUS means run instantly (Run line by line). But in the otherhand setTimeout in asynchronous. Thats why setTimeout prints later in console.

// Asynchronous function not run instantly. First it stores to the memory then it will run.

