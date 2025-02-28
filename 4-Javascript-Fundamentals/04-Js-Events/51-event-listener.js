

//Event Listening in js

function clickBtn() {
    console.log("Card clicked successfully!!!");
}

function sayHi() {
    console.log("Say Hii World!!");
}

const card3 = document.querySelector(".card3");

card3.onclick = sayHi;

const card4 = document.querySelector(".card4");


// using addEventListener we can use multiple events  but using onclick we can not use multiple event coz it will override the 1st event.


card4.addEventListener('click', sayHi);  // (eventName , function)

card4.addEventListener('click', ()=> {
    console.log("Card 4 clicked!!");
});


// using eventListener change the innerText on click event

const card5 = document.querySelector(".card5");

card5.addEventListener("click", ()=> {
    card5.innerText = "Five";
    console.log("card5 text changed");
})


//  Add multiple card using event listener and create element and Clone Node

const container = document.querySelector(".container");
const addCard = document.querySelector(".add-card");

let count = 6;

addCard.addEventListener("click", ()=> {
    // const newCard = document.createElement("div");  // using create element
    
    // newCard.classList.add("card");

    const newCard = card3.cloneNode();  // using clone node

    newCard.innerText = count++;
    container.append(newCard);
})


// ended  //