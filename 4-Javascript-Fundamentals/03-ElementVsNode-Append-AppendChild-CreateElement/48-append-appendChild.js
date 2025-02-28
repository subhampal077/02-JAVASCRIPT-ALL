

// Append - Append Child in js

// Append meaning add something to the end of a written document.

const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const card = document.querySelector(".card");

// cut h1 from the document and paste it as a last element of the container means h1 will be the appendChild of container.  (similar of cut & paste)

container.appendChild(h1);

// if we want to copy and paste h1 as a appendChild of container then we have to use cloneNode function and then have to do appendChild

// creating deep clone of h1
const h1Clone = h1.cloneNode(true);

// console.log(h1Clone);  // <h1>AppendChild and Append</h1>


// copy of h1 element paste as a appendChild in container
container.appendChild(h1Clone);

// cloning card and copy in appendChild of container.

container.appendChild(card.cloneNode(true));


// creating 10 clone card starting rom 2 to 10

for (let i=2; i<=10; i++) {
    container.appendChild(card.cloneNode()).innerText = i;
};



///   APPEND  // 

// append and appendChild both works similar but appendChild returns the copied node element but append returns undefined.

// we can paste/append a new string only using Append

container.append("HELLO BRO ");    // not possible with appendChild coz appendChild only takes NODE (an element is a node.)

// we can append multiple element or string using append
container.append("hello ", h1, "hii ", "bye ");


// we can add string (as a text node) using appendChild but at 1st we need to create a text node

const newTextNode = document.createTextNode(" Demo Text Node");

container.appendChild(newTextNode);   // "string" added as a text node