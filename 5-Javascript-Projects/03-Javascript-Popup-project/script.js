const openBtn = document.querySelector("button");
const main = document.querySelector("main");
const closeIcon = document.querySelector(".close-icon");
const mainContainer = document.querySelector(".main-container");

openBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    main.classList.add("popup-opened");
});

closeIcon.addEventListener("click", (e) => {
    main.classList.remove("popup-opened");
});

window.addEventListener("click", (e) => {
    main.classList.remove("popup-opened");
});

mainContainer.addEventListener("click", (e) => {
    e.stopPropagation();
});