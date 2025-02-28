// Mouse Events in js

const h1 = document.querySelector("h1");

//  Add multiple card using event listener and create element and Clone Node

const container = document.querySelector(".container");
const addCard = document.querySelector(".add-card");

let count = 1;

//// if we click mouse and hold it the event will not fire

addCard.addEventListener("click", () => {
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// if we click mouse and hold it still the event will fire
addCard.addEventListener("mousedown", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// if we click mouse and Un-hold it the event will fire
addCard.addEventListener("mouseup", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// when we hover and enter the mouse the event will fire
addCard.addEventListener("mouseenter", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// when we hover and leave the mouse the event will fire
addCard.addEventListener("mouseleave", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// when we hover and move the mouse on the element the event will fire
addCard.addEventListener("mousemove", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// similar to mouseleave event
addCard.addEventListener("mouseout", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// similar to mouseenter but if have have another children element inside the main element and if we move out from child element still the event will fire

addCard.addEventListener("mouseover", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// event will fire when we move the mouse wheel
addCard.addEventListener("wheel", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// need to drag the element to fire this event

// to make an element draggable we need to make that element draggable="true" //

h1.addEventListener("drag", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// touchstart event is for mobile devices (UI event),  there is an opposite event called touchend event

addCard.addEventListener("touchstart", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// touchend
addCard.addEventListener("touchend", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

addCard.addEventListener("touchmove", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// works like combine of mousemove + touchmove // work on pc and mobile also
addCard.addEventListener("pointermove", (e) => {
  console.log(e);
  const newCard = document.createElement("div"); // using create element
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// other pointer events are == pointerenter event , pointerleave event

// ended   //
