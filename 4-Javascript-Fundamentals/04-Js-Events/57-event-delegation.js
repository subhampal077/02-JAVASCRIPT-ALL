// Important fo interview

// Event Delegation in js :  Instead of adding event listener on every single element, when we add event listener on parent element only that is called event delegation.

const container = document.querySelector(".container");
const addCard = document.querySelector(".add-card");

let count = 1;

addCard.addEventListener("click", (e) => {
  // console.log(e);
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;

  // newCard.addEventListener("click", ()=> {
  //     newCard.remove();
  // })

  container.append(newCard);
});

container.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target !== container && e.target !== addCard) {
    e.target.remove();
  }
});

// END //

// Instead of adding event listener to every element if we add event listener to direct parent and use it. then this process is called event delegation.
