
//  Keyboard Events in javascript

// we can use keyboard event on any element but there is one condition and that is the element should be always in focus state 

// h1 is a non focusable element. to make it focusable element we need a add tabIndex="0" in h1 tag in html 

const h1 = document.querySelector("h1");

h1.addEventListener("keypress", (e) => {
    console.log(e.key);
});

// to focus on whole web page need to use window

// this event got fire when keypress

window.addEventListener("keypress", (e) => {
    console.log(`Key Value:`,e.key);
    console.log(`Key Code:`,e.code);
});


// this event got fire when key got Up

window.addEventListener("keyup", (e) => {
    console.log(`Key Value:`,e.key);
    console.log(`Key Code:`,e.code);
});


// this event got fire when key got Down

window.addEventListener("keydown", (e) => {
    console.log(`Key Value:`,e.key);
    console.log(`Key Code:`,e.code);
});