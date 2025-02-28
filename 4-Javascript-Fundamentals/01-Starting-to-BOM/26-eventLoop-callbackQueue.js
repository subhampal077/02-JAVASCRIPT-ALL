
// Event Loop and Callback Queue in JavaScript |

console.log("Hi1");

function hello() {
    console.log("Hello World");
};

for(let i=1 ; i<=5; i++) {
    console.log(i);
};

debugger;
// hello();

setTimeout( function() {
    console.log("Hi2");
} , 0 );

console.log("Hi3");


//WEB API

// SetTimeout is a asynchronous function  1st it stores the code to  WEB APIS  then move to  CALLBACK QUEUE  and then come to  CALL STACK  then run the function and print the output.

// EVENT LOOP: It is a middle part something which checks the call stack and the callback queue. check the call stack is empty or not, If the call Stack is empty then it takes the callback queue's code and move it to Call Stack to execute it.


