//   Event Simulators in js

//  Add multiple card using event listener and create element and Clone Node

const container = document.querySelector(".container");
const addCard = document.querySelector(".add-card");

let count = 1;

addCard.addEventListener("click", (e) => {
  // console.log(e);
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// for(let i =0;i<20;i++) {
//     addCard.click();
// }

//  click event simulator
const clrIntervalID = setInterval(() => {
  if (count == 10) {
    clearInterval(clrIntervalID);
  }
  addCard.click();
}, 100);

// focus event simulator

const input = document.querySelector("input");

// focus simulator
setTimeout(() => {
  input.focus();
  console.log("input focused");
}, 2000);

// blur event simulator

setTimeout(() => {
  input.blur();
  console.log("input blurred");
}, 4000);

// submit event simulator

const form = document.querySelector("form");

// simulating submit event using setTimeout
setTimeout(() => {
  form.submit();
  console.log("form submitted");
}, 8000);

// reset event simulator

setTimeout(() => {
  form.reset();
  console.log("form reset");
}, 6000);

// END //
