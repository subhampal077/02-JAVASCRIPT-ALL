//  Event Bubbling and Capturing in js

// Event Bubbling == when we click on the child event listener the parent event listener, parent of parent event listener and so on will fire together and that is called event bubbling.

// Event Capturing == using event capture event will propagate from parent to child element. that is called event capturing.

const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

// true is third argument, used for opposite the bubble direction
window.addEventListener(
  "click",
  () => {
    console.log("6. Window Event Listener");
  },
  true
);

document.addEventListener("click", () => {
  console.log("5. Document Event Listener");
});

document.body.addEventListener("click", () => {
  console.log("4. Body Event Listener");
});

green.addEventListener("click", () => {
  console.log("3. Green Event Listener");
});

pink.addEventListener("click", () => {
  console.log("2. Pink Event Listener");
});

// blue.addEventListener("click", ()=> {
//     console.log("1. Blue Event Listener");
// }, true)

// using capture, event will propagate from outside to inside of the element

// ANOTHER WAY TO WRITE EVENT CAPTURE //
// blue.addEventListener("click", ()=> {
//     console.log("1. Blue Event Listener");
// }, {capture: true, once: true})

// to stop event bubbling we need to use event.stopPropagation()

// only blue event listener will fire not its parents
blue.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("1. Blue Event Listener");
  },
  { once: true }
); // using once: true event will fire only one time

// ended  //
