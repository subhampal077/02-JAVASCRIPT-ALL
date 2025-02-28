
// SET INTERVALS IN JS 

// Print like a loop

const timer0 = setInterval( function() {
    console.log("HIII after 0sec");
}, 0 );

const timer1 = setInterval(`console.log("hello after 1sec");`, 1000);

const timer2 = setInterval("console.log('hello after 2sec')", 2000);

const timer3 = setInterval(a , 3000);  //Higher Order Func


clearInterval(timer0);  //timer1 will not print 
clearInterval(timer1);


function a() {
    console.log("Hello World after 3 sec");
};

console.log("It will print at the TOP");

