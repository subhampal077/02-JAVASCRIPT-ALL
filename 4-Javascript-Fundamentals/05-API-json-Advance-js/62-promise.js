
// Promises in JS
// There are total 3 states of promise- 1) pending state, 2) resolve/fulfilled state, 3) reject state

// promise is an special object == example


const p = new Promise((resolve, reject) => {

    resolve("Hi, I am subham");  // PromiseState: fulfilled  // PromiseResult: Hi, I am subham"


    // reject("Hi, I am subham");  // PromiseState: rejected  //  PromiseResult: Hi, I am subham
});


// resolving using settimeout

const setTimeOutResolveBtn = document.querySelector(".setTimeOut-resolve-btn");

const p1 = new Promise((resolve, reject) => {
    setTimeOutResolveBtn.addEventListener("click", () => {
        setTimeout(() => {
            resolve("p1 Promise Resolved!!");
            console.log(p1);   // 3sec after click on the resolveBtn p1 is in fulfilled state
        }, 2000);
    });
});

console.log(p1);   // at starting p1 promise is in pending state



// Main use of promise with then() and catch()

const resolveBtn = document.querySelector(".resolve-btn");
const rejectBtn = document.querySelector(".reject-btn");


// creating a setTimeout function to see that the priority of callBack queue is less than microtask queue. and setTimeOut moves to callBack queue.

resolveBtn.addEventListener("click", () => {
    setTimeout(() => {
        console.log("setTimeOut method running!!");
    });
});



const p2 = new Promise((resolve, reject) => {

    resolveBtn.addEventListener("click", () => {
        resolve("P2 promise resolved!!");
    });

    rejectBtn.addEventListener("click", () => {
        reject("P2 promise rejected!!");
    });

});

p2.then((data) => {
    console.log(data);
    console.log("then ran after p2 promise resolved");
}).catch((err) => {
    console.log(err);
    console.log("catch ran after p2 promise rejected!");
}).finally(() => {
    console.log("Finally run in both resolved and rejected state");
});

// using catch we can catch the error

// notes

// when a promise resolved or rejected, the callback function goes to microtask queue and waiting for callStack to empty. once callStack is empty then it move to callStack from microtask queue.

// the priority of microTask queue is greater than callBack queue.


// settled keyword in promise means the promise is not in pending state. if the promise is fulfilled or rejected any of one, then it is called promise is settled.



// using p promise from the top of the code 

p.then((data) => {
    console.log("here p.then also returns a promise");
    console.log(data);  // Hi, I am subham
    return "hello string";
}).then((data) => {
    console.log("we can use .then on the returning promise also");
    console.log(data);  //  hello string
    return "I am subham";
}).then((data) => {
    console.log(data);   //  I am subham
}).catch((err) => {
    console.log("At the end we should use catch to handle/catch the error data and the .catch also return a promise", err);
});

// this is how our code grow vertically and that is how we can fix callBack hell**